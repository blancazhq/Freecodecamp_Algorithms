function pairElement(str) {
  var pair_array = [];
  var pair1 = ["A", "T"];
  var pair2 = ["G", "C"];
  var str_array = str.split("");
  for(var i=0;i<str.length;i++){
    var pair = [];
    for(var j=0;j<pair1.length;j++){
      if(str_array[i]===pair1[j]){
        pair.push(str_array[i]);
        if(j+1 === 1){
          pair.push(pair1[j+1]);
        }else{
          pair.push(pair1[j-1]);
        }
      }
    };
    for(var k=0;k<pair2.length;k++){
      if(str_array[i]===pair2[k]){
        pair.push(str_array[i]);
        if(k+1 === 1){
          pair.push(pair2[k+1]);
        }else{
          pair.push(pair2[k-1]);
        }
      }
    };
    pair_array.push(pair);
  }
  return pair_array;
}

console.log(pairElement("GCG"));
