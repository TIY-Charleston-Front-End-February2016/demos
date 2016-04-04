(function () {
  "use strict";
  angular
    .module('demorouting')
    .controller('HomeController', function ($scope, $state) {
      $scope.hollabackatcha = "this is cool!!!!";
      $scope.goHome = function () {
        $state.go('home.main');
      }
    })
})();
