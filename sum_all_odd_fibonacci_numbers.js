function sumFibs(num) {
  var fib_array = [];
  function fib(num){
    if(num < 2){
      return 1;
    }else{
      return fib(num-1)+fib(num-2);
    }
  }
  for(var i=0;i<num;i++){
    if(fib(i)<=num){
      fib_array.push(fib(i));
    }else{
      break;
    }
  }
  fib_array = fib_array.filter(function(n){
    return n % 2 !== 0;
  })
  fib_array = fib_array.reduce(function(a, b){
    return a + b;
  }, 0);
  return fib_array;
}

console.log(sumFibs(75024));
console.log(sumFibs(75025));
