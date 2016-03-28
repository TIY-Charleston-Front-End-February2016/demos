
var angular = require('angular');

angular
  .module('bloggy')
  .controller('BlogController', function ($scope, BlogService, $routeParams, $location) {
    BlogService.getPosts().success(function (posts) {
        $scope.blogPosts = posts; // some data from a service
    });

    $scope.addPost = function (newPost) {
      // use service and pass the object
      BlogService.addPost(newPost);
      $location.path('/blog')
    };
    $scope.editPost = function (editedPost) {
      // use service and pass the edited object
      BlogService.editPost(editedPost);
    };
    $scope.deletePost = function (id) {
      BlogService.deletePost(id);
    }
    if($routeParams.blogId) {
      BlogService.getPost($routeParams.blogId).success(function (singlePost) {

          $scope.post = singlePost; // some data

      });

    }

    $scope.$on('post:added', function () {
      BlogService.getPosts().success(function (posts) {
          $scope.blogPosts = posts; // some data from a service
      });
    });
    $scope.$on('post:deleted', function () {
      BlogService.getPosts().success(function (posts) {
          $scope.blogPosts = posts; // some data from a service
      });
    });


  });
