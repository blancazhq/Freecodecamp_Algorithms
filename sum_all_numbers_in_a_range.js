function sumAll(arr) {
  function range(min, max){
    var rangeArray = [];
    for(var i = min ; i<= max; i++){
    rangeArray.push(i);
    }
    return rangeArray;
  }

  function combine(a, b){
    return a+b;
  }

  if(arr[0]<arr[1]){
    return range(arr[0], arr[1]).reduce(combine, 0);
  } else {
    return range(arr[1], arr[0]).reduce(combine, 0);
  }
}

console.log(sumAll([1, 4]));
