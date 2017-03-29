function smallestCommons(arr) {
  function lcm(arr){
    var prime_factors_array1 = [];
    var prime_factors_array2 = [];
    var prime_factors_freq_array1 = {};
    var prime_factors_freq_array2 = {};

    function isPrime(num){
      var isPrime = true
      for(var i=2;i<num;i++){
        if(num%i===0){
          isPrime = false;
        }
      }
      if(isPrime===true){
        return true;
      }else{
        return false;
      }
    }

    function prime_factorization(num, arr){
      for(var i=2;i<=num;i++){
        if(num%i===0 && isPrime(i)===true){
          arr.push(i);
          prime_factorization(num/i, arr)
          break
        }
      }
    }

    prime_factorization(arr[0],prime_factors_array1);
    prime_factorization(arr[1],prime_factors_array2);

    function freq_tally(arr, obj){
      for(var i=0;i<arr.length;i++){
        if(obj[arr[i]]===undefined){
          obj[arr[i]]=1;
        }else{
          obj[arr[i]]+=1;
        }
      }
      return obj
    }

    function findGCD(obj1, obj2){
      var gcd = {};
      for(var key1 in obj1){
        var value1=obj1[key1];
        for(var key2 in obj2){
          var value2=obj2[key2];
          if(key1===key2 && value1<=value2){
            gcd[key1] = value1;
          }else if(key1===key2 && value2<value1){
            gcd[key2] = value2;
          }
        }
      }
      return gcd;
    }

    var tally1 = freq_tally(prime_factors_array1, prime_factors_freq_array1);
    var tally2 = freq_tally(prime_factors_array2, prime_factors_freq_array2);
    var gcd_obj = findGCD(tally1, tally2);
    var gcd = 1;

    for(var key in gcd_obj){
      var value = gcd_obj[key]
      gcd *= (Math.pow(key, value));
    }

    var lcm = arr[0]*arr[1]/gcd
    return lcm;
  }

  function range(min, max){
    var arr=[];
    for(var i=min;i<=max;i++){
      arr.push(i);
    }
    return arr;
  }
  
  function combine(a, b){
    return lcm([a, b]);
  }

  arr=arr.sort(function(a,b){return a-b});
  var lcm_all = range(arr[0], arr[1]).reduce(combine);
  return lcm_all;
}

console.log(smallestCommons([1,5]));
console.log(smallestCommons([1,20]));
