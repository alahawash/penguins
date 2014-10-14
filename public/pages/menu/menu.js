'use strict';

angular.module('penguins.menu', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        'controller': 'MenuCtrl',
        'templateUrl': 'pages/menu/menu.html'
    });

}])

.controller('MenuCtrl', ['$scope', function ($scope) {

}]);