angular
  .module('wangular')
  .controller('HomeController', function($scope,$location,WangulService,ApiWeatherService,CacheEngine) {

    if(CacheEngine.get('currentTemp')) {
      var cache = CacheEngine.get('currentTemp');
      $scope.getStuff = cache.data;
    } else {
      ApiWeatherService.getLocation()
        .then(ApiWeatherService.getWeather)
        .then(function(data) {
          CacheEngine.put('currentTemp',data);
          $scope.getStuff = data.data;
        })
    }

    WangulService.getWanguls()
      .then(function(data) {
        $scope.weathers = data.data;
    });

    $scope.deleteWangul = function(id) {
      WangulService.deleteWeather(id)
        .then(function(data) {
          var objId = id
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
