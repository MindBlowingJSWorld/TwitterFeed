// Monitoring the config files 
// This is really helpful, when we want configs to be reloaded at runtime.. 
// This may turn dangerous if configs like port are changed on the fly and users are not aware of this change
var fs = require("fs");

var config = JSON.parse(fs.readFileSync("../config/appconfig.json"));

console.log(config);

fs.watchFile("../config/appconfig.json", function(current, previous) {
    console.log("The file has been updated now");

    config = JSON.parse(fs.readFileSync("../config/appconfig.json"));

    console.log("New configs are : ", config);

    console.log("Current config are : ", current);
});