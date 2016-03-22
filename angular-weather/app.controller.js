angular
  .module('wangular')
  .controller('HomeController', function($scope) {

  })
  .controller('NewWeatherController', function($scope,NewWeatherService) {
    $scope.temperature = '62.3';
    $scope.wind = '';
    $scope.sky = '';
    $scope.humidity = '';
    $scope.img = 'http://www.placecage.com/200/300'


    $scope.getWeatherCtrl = function(zipcode) {
      console.log(zipcode);
      NewWeatherService.getWeather(zipcode)
        .then(function(data) {
          console.log(data);

          $scope.temperature = NewWeatherService.changeKelvinToFarenheit(data.data.main.temp);
          $scope.wind = data.data.wind.speed;
          $scope.sky = data.data.weather[0].description;
          $scope.humidity = data.data.main.humidity;
          if($scope.sky === 'clear sky') {
            $scope.img = "http://www.fillmurray.com/200/300"
          }
        });
    }

  })
  .controller('OldWeatherController', function() {

  })
