
function convertHTML(str) {
  var re1 = /[<]/g
  var re2 = /[>]/g
  var re3 = /["]/g
  var re4 = /[']/g
  var re5 = /[&]/g
  var res = str.replace(re5, "&amp;")
  res = res.replace(re1, "&lt;")
  res = res.replace(re2, "&gt;")
  res = res.replace(re3, "&quot;")
  res = res.replace(re4, "&apos;")
  return res;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Shindler's List"));
