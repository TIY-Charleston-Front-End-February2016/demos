angular
  .module('wangular',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/home.html",
        controller: 'HomeController'
      })
      .when('/new-weather', {
        templateUrl: "templates/new-weather.html",
        controller: "NewWeatherController"
      })
      .when('/old-weather', {
        templateUrl: "templates/old-weather.html",
        controller: 'OldWeatherController'
      })
  })
