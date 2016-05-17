var angularApp = angular.module('CrickBuzz',['ngResource','ngRoute'])

angularApp.config(function($routeProvider) {
$routeProvider
.when('/', 
{
  templateUrl: 'src/main.html',
  controller: 'MainController'
  })

});



angularApp.controller("MainController",function(){

});