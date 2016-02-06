(function() {

    var github = function($http) {

        var GetUser = function(username) {

            return $http.get("https://api.github.com/users/" +
                    username)
                .then(function(response) {
                    return response.data;
                });

        };

        var GetRepos = function(user) {
            return $http.get(user.repos_url)
                .then(function(response) {
                    return response.data;
                });
        };


        return {
            GetUser: GetUser,
            GetRepos: GetRepos
        };
    };

    //Just created reference of the service 
    var module = angular.module("SocialViewer");
    module.factory("githubService", github);

}());