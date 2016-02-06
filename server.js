(function() {

    var http = require("http");
    var fs = require("fs");
    var express = require("express");

    var config = JSON.parse(fs.readFileSync("server/config/appconfig.json"));
    var host = config.host === undefined ? "localhost" : config.host;
    var port = config.port === undefined ? "1111" : config.port;
    var template_dir = config.client_template;

    var app = express();

    console.log("template_dir : ", template_dir);

    // use the things required
    //app.use(app.router);
    app.use(express.static(template_dir));

    //using default url with username
    app.listen(port, host);

    fs.watchFile("server/config/appconfig.json", function(
        current, previous) {
        config = JSON.parse(fs.readFileSync(
            "server/config/appconfig.json"));
        app.stop();
        app.listen(port, host);
        host = config.host;
        port = config.port;


        template_dir = config.client_template;
    });

    /*
        Start:  All the URIs matched with URL, its nearly similiar to the services matched with each URL.
    */

    //using default url
    app.get("/", function(req, resp) {
        console.info("Redirecting to : ", template_dir +
            "/LandingPage.html");

        resp.redirect("/LandingPage.html");
    });



}());