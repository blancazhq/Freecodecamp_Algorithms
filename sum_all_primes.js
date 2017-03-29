function sumPrimes(num) {
  var prime_array = [];
  for(var i=2;i<=num;i++){
    var isPrime = true
    for(var j=2;j<i;j++){
      if(i%j===0){
        isPrime = false;
      }
    }
    if(isPrime===true){
      prime_array.push(i);
    }
  }
  var sum = prime_array.reduce(function(a,b){return a+b;},0);
  return sum
}

console.log(sumPrimes(10));
