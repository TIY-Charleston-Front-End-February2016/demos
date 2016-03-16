var Backbone = require('backbone');
var tmpl = require('./templates');
module.exports = Backbone.View.extend({
  tagName: 'article',
  template: _.template(tmpl.photo),
  initialize: function () {},
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }

});
