function translatePigLatin(str) {
  if(str.slice(0,1) === "a" || str.slice(0,1) === "e"|| str.slice(0,1) === "i"|| str.slice(0,1) === "o"|| str.slice(0,1) === "u"){
    var new_str = str+"way";
  }else{
    if(str.slice(1,2)=== "a" ||str.slice(1,2) === "e"|| str.slice(1,2) === "i"|| str.slice(1,2) === "o"|| str.slice(1,2) === "u"){
      var str_first_letter = str.slice(0,1);
      var str_remaining = str.slice(1);
      var new_str = str_remaining+str_first_letter+"ay";
    }else{
      var str_first_two_letter = str.slice(0,2);
      var str_remaining = str.slice(2);
      var new_str = str_remaining+str_first_two_letter+"ay";
    }
  }
  return new_str;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("paragraphs"));
