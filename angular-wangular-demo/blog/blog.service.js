
var angular = require('angular');

angular
  .module('bloggy')
  .factory('BlogService', function ($http, $rootScope) {

    var url = "http://tiny-tiny.herokuapp.com/collections/bloggy-blog";

    var getPosts = function () {
      return $http.get(url)
    }
    var getPost = function (id) {
      return $http.get(url + "/" + id);
    }
    var deletePost = function (id) {
      $http.delete(url + "/" + id).then(function (res) {
        console.log(`${res} deleted`);
        $rootScope.$broadcast('post:deleted');
      })
    }
    var editPost = function (editedPost) {
      $http.put(url + "/" + editedPost._id, editedPost).then(function (res) {
        console.log(`${res} edited`);
        $rootScope.$broadcast('post:edited');
      })
    };
    var addPost = function (newPost) {
      $http.post(url, newPost).then(function (res) {
        console.log(res);
        $rootScope.$broadcast('post:added');
      });
    }

    return {
      getPosts: getPosts,
      getPost: getPost,
      deletePost: deletePost,
      editPost: editPost,
      addPost: addPost

    }

  });
