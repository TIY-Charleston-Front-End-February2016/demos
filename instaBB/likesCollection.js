var Backbone = require('backbone');
var LikeModel = require('./likesModel');
module.exports = Backbone.Collection.extend({
  model: LikeModel,
  url: 'http://tiny-tiny.herokuapp.com/collections/instabb',
  initialize: function () {
    console.log('its alive, the like, our model!');
  }
});
