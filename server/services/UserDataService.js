//User Data Service


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
                "Content-Type": "text/json"
            });

            resp.send(users[user]);
        } else {
            resp.send({
                "error_message": "User Requested does not exist"
            });
        }
    });
});