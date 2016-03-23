angular
  .module('wangular')
  .service('WangulService',function($http) {
    var url = "https://tiny-tiny.herokuapp.com/collections/wanguls";

    function getWanguls() {
      return $http.get(url)
    }
    function postWangul(post) {
      return $http.post(url,post);
    }
    function showWangul(id) {
      return $http.get(url + "/" + id)
    }

    function editWangul(post) {
      return $http.put(url + '/' + post._id, post);
    }

    function deleteWangul(id) {
      return $http.delete(url + '/' + id);
    }

    return {
      getWanguls: getWanguls,
      newWangulCreation: postWangul,
      showWangul: showWangul,
      editWangul: editWangul,
      deleteWeather: deleteWangul
    };
  })
