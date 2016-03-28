var angular = require('angular');
  angular
    .module('flickr')
    .directive('nadrow', function () {
      return {
        restrict: 'EA',
        templateUrl: 'flickr/views/nadrow.directive.html',
        link: function (scope, element, attributes) {
          element.on('click', function (evt) {
            element.text(attributes.tochanged);
            element.css('background-color', 'red');
          });

        }
      };
    });
