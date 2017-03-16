require('../templates/blockDirective.html')
require('./css/block.css')
module.exports = {
    restrict: 'E',
    transclude: true,
    templateUrl: '../templates/blockDirective.html',
    controller: ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.clustername = 'tportal';
        $scope.subMacs = [
            {ip: '0.0.0.0', env: 'FAT1'},
            {ip: '1.1.1.1', env: 'FAT4'},
            {ip: '2.2.2.2', env: 'FAT23'},
            {ip: '2.2.2.2', env: 'FAT23'},
            {ip: '2.2.2.2', env: 'FAT23'},
            {ip: '2.2.2.2', env: 'FAT23'},
            {ip: '2.2.2.2', env: 'FAT23'},
            {ip: '2.2.2.2', env: 'FAT23'},
            {ip: '2.2.2.2', env: 'FAT23'}
        ]
    }]
}