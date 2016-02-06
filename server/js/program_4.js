var fs = require("fs");

console.log("Writing to a file now");

var text = "Welcome to Node.js world, its nice.......";

fs.writeFileSync("../sampledata/write_sync.txt", text);

console.log("Finished !!");

fs.writeFile("../sampledata/dump_log.txt", text, function(err) {
    console.log("written to the file");
});

console.log("finished writing dump");