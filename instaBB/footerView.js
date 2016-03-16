var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({
  tagName: 'section',
  template: _.template(tmpl.footer),
  initialize: function () {
    console.log('you have started footer!');
    $('.content').html(this.render().el);
  },
  render: function () {
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  }

});
