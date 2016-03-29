var angular = require('angular');


angular
  .module('weatherApp',[
    'ngRoute',
    'wangular',
    'bloggy',
    'flickr'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "main.html"

      })
      .when('/404',{
        template: '<h1> You messed up, loser </h1>',
        controller: 'WangController'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })
  require('angular-route');
  require('./wangular');
  require('./blog');
  require('./flickr');
