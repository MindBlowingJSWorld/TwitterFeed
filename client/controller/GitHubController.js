// This is controllerdemo.js used by controllerdemo.html for loading the controllers 

//PersonInfoController


(function() {


    //creation of modules7
    var app = angular.module("SocialViewer");

    var GitHubController = function($scope, $http, $log, $interval,
        github) {

        var OnUserSuccess = function(response) {
            $scope.person = response;
            $scope.person.imageurl =
                "http://www.gravatar.com/avatar/" + response.gravatar_id;

            var promise1 = github.GetRepos($scope.person);

            promise1.then(OnRepos, OnError);

        };
        var OnError = function(error) {

            console.log("Error fetching data...." + error);
            $scope.error = error;
        };

        var OnRepos = function(response) {

            $log.info("repos found.... pulling data out");
            $scope.repos = response;
        };

        var decrementCountDown = function() {
            $scope.countdown -= 1;
            $log.info("decrementCountDown called");

            if ($scope.countdown < 1) {
                $scope.searchUser($scope.username);
            }
        };

        var startCountdown = function() {
            $log.info("startCountdown called");
            // call decrementCountDown after every 1 seconds for 5 times
            $interval(decrementCountDown, 1000, $scope.countdown);

        };

        console.log("Person Controller called");


        $scope.searchUser = function(username) {

            $interval.cancel();

            var promise = github.GetUser(username);

            promise.then(OnUserSuccess, OnError);


        };


        $scope.username = "angular"; //setting default user name
        $scope.message = "GIT HUB Demo Application";
        $scope.repoSortOrder = "-stargazers_count";
        $scope.countdown = 5;

        startCountdown();
        //var promise = $http.get("https://api.github.com/users/maheshk172");

    };

    //In case of minified version, we need to provide all auguments needed by controller.
    //app.controller("GitHubController", ["$scope","$http",GitHubController]);

    app.controller("GitHubController", GitHubController);


}());