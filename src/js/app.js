require('angular-material/angular-material.min.css');
require('angular-material');
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('angular-aria');
require('angular-animate');
require('../../favicon.ico');
require('../images/items.png');
require('../css/site.css');
require('../css/item.css');

var d3 = require('d3');
var app = angular.module('app', ['ngMaterial']);
var config = require('../config');
app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('altTheme').primaryPalette('cyan');
    $mdThemingProvider.setDefaultTheme('altTheme');
});

app.controller('mainController', function($scope, $timeout) {
    $scope.version = '1.0';
    $scope.items = config.items;
    $scope.querySearch = function(search) {
        return $scope.items.filter(function(v) {
            var name = angular.lowercase(v.zh_name);
            var lowerSearch = angular.lowercase(search);
            return name.indexOf(lowerSearch) >= 0 || v.id.indexOf(lowerSearch) >= 0;
        })
    };
    $scope.assignIcons = function() {
        for (var i=0;i<$scope.items.length;i++) {
            var ids = $scope.items[i]['id'].split(':');
            var //mainId = (ids[0] >>> 0).toString(2),
                mainId = ids[0],
                appendix = ids[1] ? ids[1] : '0';
            $scope.items[i].itemClass = "items-23-" + mainId + "-" + appendix;
            $scope.items[i].desc = $scope.items[i].zh_name + ' (' + $scope.items[i].id + ')';
        }
    };
    $scope.assignIcons();
});
module.exports = app;