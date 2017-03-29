function telephoneCheck(str) {
  // Good luck!
  var re = /(1)?( )?(\()?\d{3}(\))?( )?(-)?\d{3}( )?(-)?\d{4}/g
  var found = str.match(re);
  function parenthesesTest(str){
    var result = true;
    for(var i=0;i<str.length;i++){
      var slice1 = str.slice(i, i+1);
      var slice2 = str.slice(i+4, i+5);
      if(slice1 === "(" && slice2 !== ")"){
        result = false;
      }else if(slice1 === ")" && i===3){
        result = false;
      }else if(slice2 === ")" && slice1 !== "("){
        result = false;
      }  
    }
    return result;
  }
  if(found!==null && found[0] === str && parenthesesTest(str)===true){
    return true;
  }else{
    return false;
  }
}



// console.log(telephoneCheck("555-555-5555"));
// console.log(telephoneCheck("1 555-555-5555"));
// console.log(telephoneCheck("555-5555"));
console.log(telephoneCheck("555)-555-5555"));
// console.log(telephoneCheck("(555-555-5555"));
