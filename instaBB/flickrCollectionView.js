var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var PhotoView = require('./flickrPhotoView');

module.exports =  Backbone.View.extend({
  el: '.content',
  initialize: function () {
    this.addAll();
  },

  addOne: function (el) {
      var modelView = new PhotoView({model: el});
      this.$el.append(modelView.render().el);
  },
  addAll: function () {
    this.$el.html('');
    _.each(this.collection.models, this.addOne, this);
  }
});
