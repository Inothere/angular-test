require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/about', {template: 'about'}).when('/contact', {template: 'contact'});
}])
// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope, $timeout) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $timeout(function(){
    	var main = $('#main').html();
    })
});