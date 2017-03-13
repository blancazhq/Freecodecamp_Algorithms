function fearNotLetter(str) {
  for(var i=0;i<str.length;i++){
    console.log(str.charCodeAt(i));
    if(str.charCodeAt(i)-str.charCodeAt(i-1)===2){
      var letter = String.fromCharCode(str.charCodeAt(i)-1)
      return letter;
    }
  }
}

console.log(fearNotLetter("abce"));
