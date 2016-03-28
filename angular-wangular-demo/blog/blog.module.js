var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('bloggy', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/blog', {
        templateUrl: 'blog/views/list.html',
        controller: 'BlogController'
      })
      .when('/hello', {
        templateUrl: 'blog/views/create.html',
        controller: 'BlogController'
      })
      .when('/blog/:blogId', {
        templateUrl: 'blog/views/show.html',
        controller: 'BlogController'
      })
      .when('/blog/:blogId/edit', {
        templateUrl: 'blog/views/edit.html',
        controller: 'BlogController'
      });

  });
