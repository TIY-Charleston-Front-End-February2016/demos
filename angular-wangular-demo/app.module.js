var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('wangular',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "templates/index.html",
        controller: "HomeController"
      })
      .when('/wanguls/new', {
        templateUrl: 'templates/new.html',
        controller: 'WangController'
      })
      .when('/wanguls/:wangulId', {
        templateUrl: 'templates/show.html',
        controller: "WangController"
      })
      .when('/wanguls/:wangulId/edit', {
        templateUrl: 'templates/edit.html',
        controller: "WangController"
      })
      .when('/404',{
        template: '<h1> You messed up, loser </h1>',
        controller: 'WangController'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })

  require('./controllers/home.controller');
  require('./controllers/wang.controller');
  require('./services/apiWeather.service');
  require('./services/wangular.service');
  require('./services/cacheEngine.service');
  require('./directives/tempDirective');
