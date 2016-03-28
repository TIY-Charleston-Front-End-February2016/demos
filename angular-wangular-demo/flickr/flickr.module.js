var angular = require('angular');
var _ = require('underscore');
var moment = require('moment');
  angular
    .module('flickr', [
      'ngRoute',
      'moment',
      'underscore'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/flickr', {
          templateUrl: 'flickr/views/list.html',
          controller: 'FlickrController as flickrCtrl',
          // controllerAs: 'flickrCtrl'
        })
        .when('/flickr/:flickrId', {
          templateUrl: 'flickr/views/detail.html',
          controller: 'FlickrController as flickrCtrl',
          // controllerAs: 'flickrCtrl'
        })
        .otherwise({ redirectTo: '/404'});
    });

angular
  .module('moment', [])
  .factory('moment', function($window) {
    return $window._;
});

angular
  .module('underscore', [])
  .factory('_', function($window) {
    return $window._;
});
