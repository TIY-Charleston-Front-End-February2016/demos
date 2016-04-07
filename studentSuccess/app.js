(function () {
  'use strict';
  angular
    .module('studentSuccess', [
      'ngRoute',
      'uiGmapgoogle-maps'
    ])
    .config(function (uiGmapGoogleMapApiProvider, $routeProvider) {
      uiGmapGoogleMapApiProvider.configure({
       key: 'AIzaSyB4SKNOyzdTxhr9ev6lOWNispS2MtxIZ04',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
      });
      $routeProvider
        .when('/', {
          templateUrl: 'main.html',
          controller: 'MainCtrl'
        });
  });
})();
