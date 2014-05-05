'use strict';

var module = angular.module('IssuetrackerApp');

module.controller('TimelineController', ['$scope', function ($scope) {
    $scope.title = "김정빈 안녕";

    $scope.participant = ["a","c","f"];

    $scope.follower = ["d","e","f","g"];

    $scope.now = new Date();

    $scope.addNEWS = false;

    $scope.menuClick = function(){
        alert("!");
        $scope.menu = true;
    };

    $scope.issue = {
            tag:["세월호"],
            category:["사회","정치"],
            groups:[{
                article:[{
                    title:"쥐났어",
                    img:"",
                    link:"",
                    date:new Date(),
                    user:"1"
                }],
                comments:[]
            },{
                article:[{
                    title:"쥐났어1",
                    img:"",
                    link:"",
                    date:new Date(),
                    user:"1"
                }],
                comments:[]
            },{
                article:[{
                    title:"쥐났어2",
                    img:"",
                    link:"",
                    date:new Date(),
                    user:"1"
                }],
                comments:[]
            },{
                article:[{
                    title:"쥐났어3",
                    img:"",
                    link:"",
                    date:new Date(),
                    user:"1"
                }],
                comments:[]
            },{
                article:[{
                    title:"쥐났어",
                    img:"",
                    link:"",
                    date:new Date(),
                    user:"1"
                }],
                comments:[]
            },{
                article:[{
                    title:"쥐났어",
                    img:"",
                    link:"",
                    date:new Date(),
                    user:"1"
                }],
                comments:[]
            }],
            isClosed:false,
            lastUpdate:new Date(),
            writer:[],
            commentator:[],
            follower:[]
        };
}]);
