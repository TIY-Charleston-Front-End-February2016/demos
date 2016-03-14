var BookCollection = Backbone.Collection.extend({
  model: BookModel,
  initialize: function (options) {
      console.log(options);
  }
});
