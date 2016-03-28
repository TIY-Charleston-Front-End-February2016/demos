angular
  .module('wangular')
  .service('ApiWeatherService',function($http,$q) {

    function getWeather(coords) {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon='+ coords.longitude + '&APPID=de4f2b286e75561bf3f40b9f01ff29f2')
    };

    function getLocation() {
      var defer = $q.defer();
      navigator.geolocation.getCurrentPosition(function(data) {
        defer.resolve(data.coords)
      });
      return defer.promise;
    }



    return {
      getWeather: getWeather,
      getLocation: getLocation
    }

  });
