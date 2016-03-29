]var angular = require('angular');
angular
  .module('bloggy')
  .controller('today', today)
  .controller('BlogController', BlogController);

today.$inject = ['$scope', '$http'];
BlogController.$inject = ['$scope', 'BlogService', '$routeParams', '$location'];

// implementation details

  function today($scope, $http) {
    var vm = this;
    vm.testData = "this is in the today controller";
  }


  function BlogController($scope, BlogService, $routeParams, $location) {

    var vm = this;
    vm.testData = "this is in the blogcontroler";
    vm.testStuff = "<h1>hello everyone</h1>";

    BlogService.getPosts().success(function (posts) {
        vm.blogPosts = posts; // some data from a service
    });

    vm.addPost = function (newPost) {
      // use service and pass the object
      BlogService.addPost(newPost);
      $location.path('/blog')
    };
    vm.editPost = function (editedPost) {
      // use service and pass the edited object
      BlogService.editPost(editedPost);
    };
    vm.deletePost = function (id) {
      BlogService.deletePost(id);
    }
    if($routeParams.blogId) {
      BlogService.getPost($routeParams.blogId).success(function (singlePost) {

          vm.post = singlePost; // some data

      });

    }

    $scope.$on('post:added', function () {
      BlogService.getPosts().success(function (posts) {
          vm.blogPosts = posts; // some data from a service
      });
    });
    $scope.$on('post:deleted', function () {
      BlogService.getPosts().success(function (posts) {
          vm.blogPosts = posts; // some data from a service
      });
    });


  }
