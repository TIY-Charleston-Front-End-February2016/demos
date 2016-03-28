var angular = require('angular');
angular
  .module('flickr')
  .controller('FlickrController', function ($scope, FlickrService, $routeParams) {
    var vm = this; // vm === viewModel;
    vm.alertMe = function () {
      alert('yes, it works!');
    };
    vm.testData = "this is in flickrController";

    FlickrService.getFlickrData().then(function (photos) {
      vm.photos = photos;
      console.log(photos);
    });


    console.log('photo id: ', $routeParams.flickrId);


  })
  .controller('dummyController', function ($scope) {
    var vm = this;
      vm.testData = "this is in dummyController";
  })
