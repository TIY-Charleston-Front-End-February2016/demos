var FormView = Backbone.View.extend({
  collection: null,
  model: null,
  template: _.template(templates.addBook),
  events: {
    'submit form': 'addBook'
  },
  addBook: function (event) {
    event.preventDefault();
    this.model.set({
      title: this.$el.find('input[name="title"]').val(),
      author: this.$el.find('input[name="author"]').val(),
      coverImg: this.$el.find('input[name="coverImg"]').val(),
      desc: this.$el.find('textarea').val()
    });
    this.$el.find('input').val('');
    this.$el.find('textarea').val('');
    this.collection.add(this.model);
    console.log(this.collection);
  },
  initialize: function () {
    if(!this.model) {
      this.model = new BookModel({});
    }
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
var BookView = Backbone.View.extend({
  model: null,
  tagName: 'article',
  template: _.template(templates.book),
  events: {
    'click .delete': 'removeBook',
    'click .showEdit': 'toggleEdit',
    'click .editBook': 'editBook'
  },
  editBook: function (event) {
    event.preventDefault();

    this.model.set({
      title: this.$el.find('.editTitle').val(),
      coverImg: this.$el.find('.editCoverImg').val(),
      desc: this.$el.find('.editDesc').val()
    });


  },
  toggleEdit: function () {
    this.$el.find('.editSection').toggleClass('editing');
  },
  removeBook: function () {
    this.model.destroy();

  },
  alertMe: function (event) {
    // event.preventDefault();
    alert(this.model.toJSON().title);
  },
  initialize: function () {
    console.log(this.model);
    this.listenTo(this.model, 'change', this.render);
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
// var myBook = new BookView({model: {title: "hello", coverImg}})

var ListView = Backbone.View.extend({
  collection: null,
  el: '.content',
  initialize: function () {
    this.addAll();
    this.listenTo(this.collection, 'update', this.addAll);
  },
  addOne: function (el) {
    var modelView = new BookView({model: el});
    this.$el.append(modelView.render().el);
  },
  addAll: function () {
      $('.content').html('');
      _.each(this.collection.models, this.addOne, this);
  }
});
