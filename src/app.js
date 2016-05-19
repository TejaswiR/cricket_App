var angularApp = angular.module('CrickBuzz',['ngResource','ngRoute'])

angularApp.config(function($routeProvider) {
$routeProvider
.when('/', 
{
  templateUrl: 'src/main.html',
  controller: 'MainController'
  })

.when ('/cricketdetails/:uniqId',
  {
    templateUrl: 'src/cricketdetails.html',
    controller: 'CricketDetailsController',
    controllerAs:'dc'
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


angularApp.controller("CricketDetailsController",['$resource','$filter','$routeParams',
function($resource,$filter,$routeParams){
   var vm=this;
   var id = $routeParams.uniqId;
   var cricDetails = $resource('http://cricapi.com/api/cricketScore',{unique_id:id});
   vm.cricResponse = cricDetails.get();
   console.log(vm.cricResponse);

}]);

