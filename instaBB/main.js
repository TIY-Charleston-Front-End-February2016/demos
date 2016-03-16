var $ = require('jquery');
var FlickrCollection = require('./flickrCollection');
var FlickrCollectionView = require('./flickrCollectionView');

$(document).ready(function () {
  var flickrCol = new FlickrCollection();
  // collection flickrCol is still empty
  console.log(flickrCol.models.length);
  flickrCol.fetch().then(function (data) {
    console.log(flickrCol.models.length);
    // data is ready
    new FlickrCollectionView({collection: flickrCol});
  });
});
