var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('wangular',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/wanguls', {
        templateUrl: 'wangular/templates/index.html',
        controller: 'HomeController'
      })
      .when('/wanguls/new', {
        templateUrl: 'wangular/templates/new.html',
        controller: 'WangController'
      })
      .when('wangular/wanguls/:wangulId', {
        templateUrl: 'wangular/templates/show.html',
        controller: "WangController"
      })
      .when('/wanguls/:wangulId/edit', {
        templateUrl: 'wangular/templates/edit.html',
        controller: "WangController"
      })
  });
