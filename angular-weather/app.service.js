angular
  .module('wangular')
  .service('NewWeatherService', function($http) {

    function getWeather(zip) {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&APPID=de4f2b286e75561bf3f40b9f01ff29f2')
    }

    function changeKelvinToFarenheit(kelvin) {
      return kelvin / 100;
    }

    return {
      getWeather: getWeather,
      changeKelvinToFarenheit: changeKelvinToFarenheit
    }

  })
