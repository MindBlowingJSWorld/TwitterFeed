// This is a aSync reading of the file

var fs = require("fs");

fs.readFile("../sampledata/sample.txt", function(err, data) {
    console.log("Contents of the file are : " + data.toString());
});


console.log("Carry on Execution");
console.log(".........................");


// Reading the file Synchronous, if there are any dependencies

console.log("Async Version");
var data = fs.readFileSync("../sampledata/sample.txt");
console.log("Contents : " + data.toString());