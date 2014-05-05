'use strict';

angular.module('mean.user').controller('UserController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
}]);
