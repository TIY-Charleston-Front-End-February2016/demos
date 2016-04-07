(function () {
  'use strict';
  angular
    .module('studentSuccess')
    .controller('MainCtrl', function (mapService, uiGmapGoogleMapApi, $scope, $rootScope) {
      uiGmapGoogleMapApi.then(function(map) {

        $scope.onClick = function(marker, eventName, model) {
           console.log("Clicked!");
           console.log(marker);
           model.show = !model.show;
       };

       $scope.map = {
           "center": {
               "latitude": 32.7833,
               "longitude": -79.931051
           },
           "zoom": 10
       }; //TODO:  set location based on users current gps location
    $scope.addStudent = function (newStudent) {
      mapService.addStudent(newStudent);
    };
    mapService.getStudents().success(function (data) {
      console.log(data);
      var points = data.map(function (el) {
        return {
          id: el._id,
          address: el.address,
          name: el.name,
          company: el.company,
          title: el.title,
          coords: {
            latitude: el.coords.lat,
            longitude: el.coords.lng
          }
        };
      });
      console.log('points: ', points);
      $scope.students = points;
    });

     $scope.$on('student:added', function () {
       mapService.getStudents().success(function (data) {
         console.log(data);
         var points = data.map(function (el) {
           return {
             id: el._id,
             coords: {
               latitude: el.coords.lat,
               longitude: el.coords.lng
             }
           };
         });
         console.log('points: ', points);
         $scope.students = points;
       });
     });
     });
  });
})();
