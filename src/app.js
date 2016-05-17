var angularApp = angular.module('CrickBuzz',['ngResource','ngRoute'])

angularApp.config(function($routeProvider) {
$routeProvider
.when('/', 
{
  templateUrl: 'src/main.html',
  controller: 'MainController'
  })

});



angularApp.controller("MainController",function($resource,$q,$http){
var vm = this;

// var D = $q.defer();
// var CricketDetails = $resource("http://cricapi.com/api/cricket");

vm.getData= function(){
  $http({method : 'GET', url:"http://cricapi.com/api/cricket"})
    .success(function(result){
      console.log(result)
      vm.all_data = result
      console.log(vm.all_data.data)
    })
    .error(function(error){
      console.log("printing from error")
      console.log(error)
    })
}

  vm.getData();
});

