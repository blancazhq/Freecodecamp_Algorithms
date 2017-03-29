function sym(args) {
  var tally_array = [];
  for(var i=0;i<arguments.length;i++){
    var tally = {};
    for(var j=0;j<arguments[i].length;j++){
      if(tally[arguments[i][j]]===undefined){
        tally[arguments[i][j]]=1;
      }
    }
    tally_array.push(tally);
  }
  var tally_array_flattened = [];
  for(var i=0;i<tally_array.length;i++){
    for(var key in tally_array[i]){
      tally_array_flattened.push(Number(key));
    }
  }
  for(var i=0; i<tally_array_flattened.length;i++){
    if(i != tally_array_flattened.indexOf(tally_array_flattened[i])){
      var element = tally_array_flattened[i]
      tally_array_flattened.splice(i, 1);
      tally_array_flattened.splice(tally_array_flattened.indexOf(element), 1);
      i=i-2;
    }
  }
  tally_array_sorted = tally_array_flattened.sort(function(a, b){return a-b});
  return tally_array_sorted;
}


console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
