function findElement(arr, func) {
  var num = 0;
  arr = arr.filter(func);
  return arr[0];
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
