angular
  .module('wangular')
  .service('WangulService',function($http, $q, $cacheFactory) {
    var url = "https://tiny-tiny.herokuapp.com/collections/wanguls";

    var cacheEngine = $cacheFactory('wangular');

    function getWanguls() {
      var defer = $q.defer();
      var cache = cacheEngine.get('wanguls');
      if(cache) {
        defer.resolve(cache)
      } else {
        $http.get(url).then(function(data) {
          cacheEngine.put('wanguls', data);
          defer.resolve(data);
        });
      }
      return defer.promise;
    }

    function postWangul(post) {

      var posts = cacheEngine.get('wanguls');
      if(posts) {
        posts.push(post)
      } else {
        posts = [post];
      }
      cacheEngine.remove('wanguls');
      cacheEngine.put('wanguls',posts);
      return $http.post(url,post);
    }

    function showWangul(id) {
      var defer = $q.defer();
      var cache = cacheEngine.get(id);
      if(cache) {
        defer.resolve(cache)
      } else {
        $http.get(url + "/" + id).then(function(data) {
          cacheEngine.put(id,data);
          defer.resolve(data);
        })
      }
      return defer.promise;
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
