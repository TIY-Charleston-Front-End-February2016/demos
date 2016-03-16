var Backbone = require('backbone');
var $ = require('jquery');
var Router = require('./router');

$(document).ready(function () {
  new Router();
  Backbone.history.start({pushstate: true});
});
