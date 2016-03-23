angular
  .module('wangular')
  .controller('HomeController', function($scope,$location,WangulService,ApiWeatherService) {

    ApiWeatherService.getLocation()
      .then(ApiWeatherService.getWeather)
      .then(function(data) {
        console.log(data);
        $scope.getStuff = data.data;
      })



    function initialLoad() {
      WangulService.getWanguls()
        .then(function(data) {
          console.log(data);
          $scope.weathers = data.data;
          window.glob = $scope.weathers;
      });
    }

    initialLoad();


    $scope.deleteWangul = function(obj) {
      WangulService.deleteWeather(obj._id)
        .then(function(data) {
          var objId = data.data._id
          var objPlace = $scope.weathers.findIndex(function(el,idx,arr) {
            return el._id === objId
          });
          $scope.weathers.splice(objPlace,1);
        });
    }

    // $scope.deleteWangul = function(obj) {
    //   var objPlace = $scope.weathers.findIndex(function(el,idx,arr) {
    //     return el._id === obj._id
    //   });
    //   $scope.weathers.splice(objPlace,1);
    //   WangulService.deleteWeather(obj._id)
    //     .then(function(data) {
    //
    //     });
    // }





})
