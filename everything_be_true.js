function truthCheck(collection, pre) {
  // Is everyone being true?
  var switchbox = collection.map(function(n){return false;})
  for(var i=0;i<collection.length;i++){
    for(var key in collection[i]){
      var value = collection[i][key];
      if(pre===key&& value){
        switchbox[i] = true;
        break;
      }
    }
  }
  return switchbox.every(function(element){return element === true});
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));;
console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"));
