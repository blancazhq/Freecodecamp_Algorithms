function binaryAgent(str) {
  function convertBinary(bi_str){
    bi_arr = bi_str.split("");
    var sum = 0;
    for(var i=0;i<bi_arr.length;i++){
      sum += Number(bi_arr[i]) * Math.pow(2, bi_arr.length-1-i)
    }
    return sum;
  }
  var arr = str.split(" ");
  var new_arr = [];
  for(var i=0;i<arr.length;i++){
    new_arr.push(String.fromCharCode(convertBinary(arr[i])));
  }
  var result = new_arr.join("")
  return result;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));;
