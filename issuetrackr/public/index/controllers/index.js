'use strict';

angular.module('mean.index').controller('MainController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
	$scope.categories=["정치", "문화", "사회", "경제", "교육", "인물"];
	$scope.home=function(){
		location.reload();
	};
	$scope.login=function(){
		location.href="/signin";
	};
	$scope.logout=function(){
		location.href="/signout";
	};
}]);
 