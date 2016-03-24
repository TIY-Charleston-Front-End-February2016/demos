angular
  .module('wangular')
  .directive('weatherReader', function() {
    return {
      templateUrl: '../templates/weather-reader.html',
      restrict: 'E',
      scope: {
        weatherTemp: '@',
        weatherSky: '@',
        weatherHuman: '@',
        weatherTime: '@',
        weatherId: '@',
        deleteFunc: '&'
      },
      link: function(scope,element,attributes) {
        console.log("el", element)
        element.bind('mouseover', function(event) {
          if(attributes.weatherHuman === "henry") {
            this.style.color = 'red';
          }
        })
      }
    }
  })
