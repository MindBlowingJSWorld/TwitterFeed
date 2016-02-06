var fs = require("fs");

fs.readFile("../sampledata/sample.txt", function(err, data) {
    console.log("Contents of the file are : " + data.toString());
});


console.log("Carry on Execution");
console.log(".........................");