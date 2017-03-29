var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  for(var key in collection){
    var record = collection[key];
    if(id.toString()===key){
      if(prop==="artist"){
        if(value===""){
          delete record[prop];
        }else{
          record[prop]=value;
        }
      }else if(prop==="tracks"){
        if(value===""){
          delete record[prop];
        }else if(record[prop]!==undefined){
          record[prop].push(value);
        }else{
          record[prop]=[];
          record[prop].push(value);
        }
      }
    }
  }
  return collection;
}

// Alter values below to test your code
// console.log(updateRecords(5439, "artist", "ABBA"));
// console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));
// console.log(updateRecords(2468, "tracks", "Free"));
console.log(updateRecords(2548, "artist", ""));
