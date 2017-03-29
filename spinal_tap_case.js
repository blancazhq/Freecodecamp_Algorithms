function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var re1 = /[A-Z]/g;
  var match = str.match(re1);
  var res = str;
  for(var i=0;i<str.length;i++){
    for(var j=0;j<match.length;j++){
      var slice = str.slice(i,i+1);
      if(slice === match[j]){
        res = res.replace(slice, " "+slice)
        break
      }
    }
  }
  res = res.replace(/ /g, "-");
  res = res.replace(/_/g, "-");
  res = res.replace(/--/g, "-");
  var first = res.slice(0, 1);
  if(first === "-"){
    res = res.replace("-", "")
  }
  res = res.toLowerCase();
  return res;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
