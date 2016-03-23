angular
  .module('wangular')
  .controller('WangController', function($scope,$location,WangulService,$routeParams) {

    $scope.createWangul = function(post) {
      console.log(post);
      post.timestamp = new Date();
      WangulService.newWangulCreation(post)
        .then(function() {
          $location.path('/');
        })
    };


    console.log($routeParams.wangulId);

    if($routeParams.wangulId) {
      WangulService.showWangul($routeParams.wangulId)
        .then(function(wangul) {
          console.log("INFO", wangul);
          $scope.weather = wangul.data;
        })
    };

    $scope.updateWeather = function(editedWangul) {
      console.log("edit", editedWangul);
      WangulService.editWangul(editedWangul)
        .then(function(data) {
          console.log("ARE YOU HAPPY?", data);
          $location.path('/');
        })
    };




});
