var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.Collection.extend({
  url: function () {
    return this.config().buildUrl();
  },
  config: function () {
    return {
          baseUrl: 'https://api.flickr.com/services/rest/?',
          apiKey: '79fb5d98470867ae3cd196873299538d',
          method: 'flickr.interestingness.getList',
          format: 'json',
          buildUrl: function () {
            return this.baseUrl + 'method=' + this.method + '&api_key=' + this.apiKey + '&format=' + this.format + '&extras=date_upload&nojsoncallback=1';
          }
        };
  },
  buildImgUrl: function (flickrObj) {
    return "https://farm"+ flickrObj.farm +".staticflickr.com/"+ flickrObj.server+"/"+ flickrObj.id +"_"+ flickrObj.secret +"_z.jpg"
  },
  parse: function (data) {
    var that = this;
    return _.map(data.photos.photo, function (el) {

      return { photoUrl: that.buildImgUrl(el),
               title: el.title,
               dtUpload: el.dateupload
             };
    });
  },
  initialize: function () {
    console.log();
    console.log("we created a flickr collection");
  }
});
