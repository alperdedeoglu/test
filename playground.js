var fs = require('fs');


var testValue = fs.readFileSync("../alper.txt").toString();

console.log(testValue);