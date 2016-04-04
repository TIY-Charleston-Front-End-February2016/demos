(function () {
  "use strict";
  angular
    .module('demorouting', [
      'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tiy', { // $state.go('tiy');
          url: '/tiy',
          templateUrl: 'templates/coffee.html',
          controller: 'HomeController as HomeCtrl'
        })
        .state('doit', {
          url: '/doit',
          templateUrl: 'templates/coffee.html',
          controller: 'HomeController as HomeCtrl'
        })
        .state('home', {
          url: '/home',
          abstract: true,
          templateUrl: 'templates/main.html',
        })
        .state('home.main', { // $state.go('home.main');
          url: '/main',
          views: {
            "content": {
                templateUrl: 'templates/cake.html'
            },
            "sidebar": {
              templateUrl: 'templates/coffee.html'
            }
          }
        })

        .state('home.another', { // $state.go('home.another');
          url: '/another',
          views: {
            "content": {
              templateUrl: 'templates/pizza.html'
            },
            "sidebar": {
              templateUrl: 'templates/cake.html'
            }
          }
        })
$urlRouterProvider.otherwise('/home');

    })



})();
