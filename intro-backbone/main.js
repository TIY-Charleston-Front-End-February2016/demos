var templates = {};
templates.book = [
  "<article data-id='<%= book.id %>'>",
  "<img src='<%= book.coverImg %>'>",
  "<h3><%= book.title %></h3>",
  "<p><%= book.desc %></p>",
  "<button class='delete'>delete</button>",
  "</article>"
].join('');
$(document).ready(function () {

  page.init();

});
var bookCollection = new BookCollection(books);

var page = {
  init: function () {
    page.addAll();
    page.initEvents();
  },
  bookTmpl: _.template(templates.book),
  initEvents: function () {
    $('.container').on('click', '.delete', function (evt) {
      evt.preventDefault();
      var bookId = $(this).closest('article').data('id');
      bookCollection.remove(bookId);
      page.addAll();
    });
    $('.container').on('click', 'img', page.logSelectedModel);
  },
  logSelectedModel: function (evt) {
    evt.preventDefault();
    var bookId = $(this).closest('article').data('id');
    console.log('here is the selected book', bookCollection.get(bookId).toJSON());
    bookCollection.get(bookId).set({title: 'You go served'});

  },
  addOne: function (el) {
    el.attributes.id = el.cid;
    var markup = page.bookTmpl({book: el.toJSON()});
    $('.container').append(markup);
  },
  addAll: function () {
    $('.container').html('');
    _.each(bookCollection.models, page.addOne);
  }

}
