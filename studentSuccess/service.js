(function () {
  'use strict';
  angular
    .module('studentSuccess')
    .factory('mapService', function ($http, $rootScope) {
      var url = "http://tiy-fee-rest.herokuapp.com/collections/demo-maps";

      var addStudent = function (newStudent) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({address: newStudent.address}, function (result) {
          newStudent.coords = {
            lat: result[0].geometry.location.lat(),
            lng: result[0].geometry.location.lng()
          };
          $http.post(url, newStudent).success(function (data) {
            $rootScope.$broadcast('student:added');
          });
        });


      };
      var getStudents = function () {
        return $http.get(url);
      };

      return {
        addStudent: addStudent,
        getStudents: getStudents,
      };
    });

})();
