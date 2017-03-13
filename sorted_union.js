function uniteUnique() {
  var arr = [];
  for(var i=0;i<arguments.length;i++){
    arr.push(arguments[i]);
  }
  function combine(current, next){
    return current.concat(next);
  }
  var arr_merged = arr.reduce(combine, []);
  for(var i=0;i<arr_merged.length;i++){
    for(var j=0;j<i;j++){
      if(arr_merged[i] === arr_merged[j]){
        arr_merged.splice(i,1);
        i -= 1;
        break;
      }
    }
  }
  return arr_merged;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
