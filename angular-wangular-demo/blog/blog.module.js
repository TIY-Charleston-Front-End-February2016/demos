var angular = require('angular');

angular
  .module('bloggy', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/blog', {
        templateUrl: 'blog/views/list.html',
        controller: 'BlogController as BlogCtrl'
      })
      .when('/hello', {
        templateUrl: 'blog/views/create.html',
        controller: 'BlogController',
        controllerAs: 'BlogCtrl'
      })
      .when('/blog/:blogId', {
        templateUrl: 'blog/views/show.html',
        controller: 'BlogController as BlogCtrl'
      })
      .when('/blog/:blogId/edit', {
        templateUrl: 'blog/views/edit.html',
        controller: 'BlogController as BlogCtrl'
      });

  });

require('angular-route');
