// reading from the config file


var fs = require("fs");

var contents = fs.readFileSync("../config/appconfig.json");

//Parsing it using json.parse() which is present in browsers as well
var config = JSON.parse(contents);

console.log("Contents : " + contents);

console.log("Name : " + config.name);
console.log("Host : " + config.host);
console.log("Port : " + config.port);