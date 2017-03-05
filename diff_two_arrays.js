function diffArray(arr1, arr2) {
  var newArr = [];
  var exist = true;
  for (var i = 0; i< arr1.length;i++){
    for(var j = 0; j< arr2.length;j++){
      if(arr1[i] === arr2[j]){
        exist = true;
        break;
      } else{
        exist = false;
      }
    }
    if(exist === false){
        newArr.push(arr1[i]);
      }
    exist = true;
  }

  for (var k = 0; k< arr2.length;k++){
    for(var l = 0; l< arr1.length;l++){
      if(arr2[k] === arr1[l]){
        exist = true;
        break;
      } else{
        exist = false;
      }
    }
    if(exist === false){
        newArr.push(arr2[k]);
    }
    exist = true;
  }

  if (arr1[0] == null){
    for(var m = 0; m< arr2.length;m++){
      newArr.push(arr2[m]);
    }
  } else if (arr1[0] == null){
    for(var n = 0; n< arr2.length;n++){
      newArr.push(arr1[n]);
    }
  }
  // Same, same; but different.
  return newArr;
}

console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
