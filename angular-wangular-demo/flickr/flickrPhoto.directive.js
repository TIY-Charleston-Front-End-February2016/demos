var angular = require('angular');
  angular
    .module('flickr')
    .directive('flickrPhoto', function () {
      return {
        restrict: 'E',
        templateUrl: 'flickr/views/flickrPhoto.directive.html',
        scope: {
          photo: '=',
          action: '&'
        },
        transclude: true
      };
    });
