var myApp = angular.module('demo', ['ngRoute']);


myApp.controller('ControllerOne',function($scope,$log,$timeout) {
  $scope.user = {};


  $scope.minPassword = 7;

  // $log.warn('Are you sure you want to do this', $scope);

  $scope.users = [{name: 'dominathan', age: 25},
                  {name:'anotherUser',age: 26},
                  {name: 'hello',age: 25},
                  {name: 'nmwh',age: 29},
                  {name: 'happy',age: 25},
                  {name: 'dominay',age: 25}]


  $scope.saveUser = function(user) {
    $log.info('THIS IS USER', user);
  }

  



  // $scope.thing = [1,2,3];
  //   $log.info("SCOPE", $scope);
  //   $scope.$watch('username',function(newVal,oldVal) {
  // })

  // setTimeout(function() {
  //   $scope.$apply(function() {
  //     $scope.username = "Hammer Time";
  //   })
  // },2000)

  // $timeout(function() {
  //    $scope.username = "Hammer Time";
  // },2000)

})


function Person(firstName,lastName,age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};
