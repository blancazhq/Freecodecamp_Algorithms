function dropElements(arr, func) {
  arr1 = arr.filter(func);
  for(var i=0;i<arr.length;i++){
    if(arr[i]===arr1[0]){
      break;
    }else{
      arr.shift();
      i-=1;
    }
  }
  // Drop them elements.
  return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));
