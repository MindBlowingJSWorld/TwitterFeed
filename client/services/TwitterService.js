//Twitter Service
(function() {

    var twitterService = function($http) {


        var GetOpenTwitts = function() {
            var twits = [];

            // To Do :  Add the logic to fetch the twitts

            reutn twits;
        };


        var AuthenticateWithTwitter = function(user) {
            // TODO : Add logic to authenticate user with Twitter API


            // false :  user is not authenticated
            // true  :  user is authenticated
            return false;
        }


        return {
            "GetOpenTwitts": "GetOpenTwitts",
            "AuthenticateWithTwitter": "AuthenticateWithTwitter"
        };


    };

    //Just created reference of the service 
    var module = angular.module("SocialViewer");
    module.factory("twitterService", twitterService);

}());