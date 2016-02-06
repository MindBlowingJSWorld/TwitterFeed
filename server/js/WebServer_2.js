//var http = require("http");

var fs = require("fs");
var config = JSON.parse(fs.readFileSync("../config/appconfig.json"));
var host = config.host === undefined ? "localhost" : config.host;
var port = config.port === undefined ? "1111" : config.port;
var template_dir = config.template;

var express = require("express");

var app = express();

// use the things required
//app.use(app.router);
app.use(express.static(__dirname + template_dir));

//using default url
app.get("/", function(req, resp) {
    resp.send("Hello World, default url triggered");
});

//using default url with username
app.listen(port, host);

// Sending all users in just json format
app.get("/users", function(req, resp) {
    console.info(req.url);
    var users = [];
    fs.readFile("../sampledata/users.json", function(err, data) {
        if (err) {
            res.set('Content-Type', 'text/plain');
            resp.send("User list is empty");
        }

        users = JSON.parse(data);
        resp.send(users);
    });

});

//searching for a specific user
app.get("/users/:user", function(req, resp) {
    console.info(req.url);

    var user = req.params.user;

    console.log("Searching for user : ", user);

    fs.readFile("../sampledata/users.json", function(err, data) {
        if (err) {
            res.set({
                "Content-Type": "text/plain"
            });
            resp.send("Unable to search userlist");
        }

        users = JSON.parse(data);

        if (users[user] !== undefined) {
            //Sending html response back to browser
            resp.set({
                "Content-Type": "text/html"
            });

            resp.send(
                "<html><head></head><body>username:" + users[user].username +
                "</br>name: " + users[user].name +
                "</br>email: " + users[user].email +
                "</br>phone: " + users[user].phone +
                "</br>twitter_id: " + users[user].twitter_id +
                "</br> github_id: " + users[user].github_id +
                "</br>linkedin_id: " + users[user].linkedin_id +
                "</br></body></html>"
            );
        } else {

            resp.send("User does not exist....");
        }



    });

});


fs.watchFile(".. / config / appconfig.json ", function(
    current, previous) {
    config = JSON.parse(fs.readFileSync(
        ".. / config / appconfig.json "));
    app.stop();
    app.listen(port, host);
    host = config.host;
    port = config.port;
});