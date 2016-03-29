var angular = require('angular');
  angular
    .module('flickr')
    .factory('FlickrService', function ($http, moment, _) {
      var urlOpts = {
          baseUrl: 'https://api.flickr.com/services/rest/?',
          apiKey: '79fb5d98470867ae3cd196873299538d',
          method: 'flickr.interestingness.getList',
          format: 'json',
          buildUrl: function () {
            return this.baseUrl + 'method=' + this.method + '&api_key=' + this.apiKey + '&format=' + this.format + '&extras=date_upload&nojsoncallback=1';
          }
        };
        var buildImgUrl = function (obj) {
          return 'https://farm' + obj.farm + '.staticflickr.com/' + obj.server + '/' + obj.id + '_' + obj.secret + '_z.jpg';
        };
        var mapDataToUrls = function (collection) {
          return _.map(collection, function (obj) {
            return {image: buildImgUrl(obj), title: obj.title, id: obj.id, dt: obj.dateupload };
          });
        };

        var getFlickrData = function () {
          return $http.get(urlOpts.buildUrl()).then(function (data) {

            return mapDataToUrls(data.data.photos.photo);
          });
        };
        var getSinglePhoto = function (photoId) {
          return $http.get(urlOpts.buildUrl()).success(function (data) {
            var photos = mapDataToUrls(data.photos.photo);

            var photo = _.where(photos, {id: photoId});
            console.log(photo);
            return photo;
          })
        };


        return {
          getFlickrData: getFlickrData,
          getSinglePhoto: getSinglePhoto

        };


    });
