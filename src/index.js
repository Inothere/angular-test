require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
var scotchApp = angular.module('scotchApp', []);

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope, $timeout) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $timeout(function(){
    	var main = $('#main').html();
    })
});