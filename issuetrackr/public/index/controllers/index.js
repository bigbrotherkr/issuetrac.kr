'use strict';

angular.module('mean.index').controller('MainController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
}]);
