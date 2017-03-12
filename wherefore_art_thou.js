function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var source_key = Object.getOwnPropertyNames(source).sort();
  var source_value = source_key.map(function(key) {
    return source[key]
  })

  for(var i = 0; i<collection.length;i++){
    var find = [];
    for(var k = 0; k<source_key.length;k++){
      find.push(false);
    }
    for(var j = 0; j<source_key.length;j++){
      for(var key in collection[i]){
        var value = collection[i][key];
        if(key === source_key[j] && value === source_value[j]){
          find[j] = true;
        }
      }
    }
    if(find.every(function(n){return n === true})){
      arr.push(collection[i]);
    }
  }
  // Only change code above this line
  return arr;
}

//console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
