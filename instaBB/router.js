var Backbone = require('backbone');
var FlickrCollection = require('./flickrCollection');
var FlickrCollectionView = require('./flickrCollectionView');
var LikesCollection = require('./likesCollection');
var LikesCollectionView = require('./likeCollectionView');
var FooterView = require('./footerView');


module.exports = Backbone.Router.extend({
  subview: null,
  routes: {
      "": "homepage",
      "home": "homepage",
      "likes": "likes",
      "blah": "blah"
  },
  likes: function () {
    var that = this; // constructor context
    var likesCol = new LikesCollection();
    // collection likesCol is still empty
    console.log(likesCol.models.length);
    likesCol.fetch().then(function (data) {
      console.log(likesCol.models.length);
      // data is ready
      that.renderSubview(new LikesCollectionView({collection: likesCol}));
    });
  },
  homepage: function () {
    var that = this; // constructor context
    var flickrCol = new FlickrCollection();
    // collection flickrCol is still empty
    console.log(flickrCol.models.length);
    flickrCol.fetch().then(function (data) {
      console.log(flickrCol.models.length);
      // data is ready

      that.renderSubview(new FlickrCollectionView({collection: flickrCol}));
    });
  },
  blah: function () {
    console.log("you have arrived at blah!");
    this.renderSubview(new FooterView());
  },
  renderSubview: function (subview) {

    this.subview && this.subview.remove();

    this.subview = subview;

  }

})
