function addTogether() {
  if(!Number.isInteger(arguments[0]) || (arguments[1]&& !Number.isInteger(arguments[1]))){
    return undefined;
  }else{
    if(arguments[1]){
      return arguments[0]+arguments[1];
    }else{
      var x = arguments[0];
      return function add(y){
        if(!Number.isInteger(y)){
          return undefined;
        }else{
          return x+y;
        }
      }
    }
  }
}

console.log(addTogether(2));
console.log(addTogether(2)(3));
console.log(addTogether(2, 3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
