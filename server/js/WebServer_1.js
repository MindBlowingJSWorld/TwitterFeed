var http = require("http");
var fs = require("fs");

var config = JSON.parse(fs.readFileSync("../config/appconfig.json"));

var host = config.host === undefined ? "localhost" : config.host;
var port = config.port === undefined ? "1111" : config.port;
var template_dir = config.template;


var server = http.createServer(function(req, resp) {
    console.log("request URL : ", template_dir + req.url);

    fs.readFile(template_dir + req.url, function(err, data) {
        if (err) {
            console.log("Sorry, Unable to locate file requested");
            resp.writeHeader(404, {
                "Content-type": "text/plain"
            });
            resp.end("Sorry, Unable to locate file requested");

        } else {
            console.log("file found in directory");
            resp.writeHeader(200, {
                "Content-type": "text/plain"
            });

            //sending file content back on screen
            resp.end(data);
        }
    });

});


server.listen(port, host, function() {
    console.log("Web Server started...");
    console.log("Listening on Port ", config.port);

});


fs.watchFile("../config/appconfig.json", function(current, previous) {
    config = JSON.parse(fs.readFileSync("../config/appconfig.json"));

    server.stop();
    server.listen(port, server);

});