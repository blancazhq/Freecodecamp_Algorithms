function steamrollArray(arr) {
  // I'm a steamroller, baby
  var new_arr = [];
  function steamroll(arr){
    for(var i=0;i<arr.length;i++){
      if(Array.isArray(arr[i])===false){
        new_arr.push(arr[i]);
      }else{
        steamroll(arr[i]);
      }
    }
  }
  steamroll(arr);
  return new_arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
