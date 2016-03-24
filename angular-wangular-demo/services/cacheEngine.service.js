angular
  .module('wangular')
  .service('CacheEngine',function($cacheFactory) {
    return $cacheFactory('weatherAPI');
});
