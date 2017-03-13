function myReplace(str, before, after) {
  function detectCap(str){
    var first_letter = str.slice(0,1);
    if(first_letter === first_letter.toUpperCase()){
      return true
    }
  }
  var after_cap_letter = after.slice(0,1).toUpperCase();
  var after_remaining = after.slice(1);
  var after_cap = after_cap_letter+after_remaining;
  console.log(after_cap)

  if(detectCap(before) === true){
    var new_str = str.replace(before, after_cap);
  }else{
    var new_str = str.replace(before, after);
  }
  return new_str
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
