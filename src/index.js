require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('materialize-css/bin/materialize.css');
var config = require('./config');

var scotchApp = angular.module('scotchApp', []);
scotchApp.controller('mainController', function($scope, $timeout) {
    $scope.version = '1.0';
    $scope.items = config.items;
    angular.element(document).ready(function () {
        $('#autocomplete-input').autocomplete({
			data: $scope.items,
			limit: 20
		});
    });
});

