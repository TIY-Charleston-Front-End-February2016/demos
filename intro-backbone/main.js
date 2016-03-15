$(document).ready(function () {
  var bookCollection = new BookCollection(books);
  new ListView({collection: bookCollection});
  var formMarkup = new FormView({collection: bookCollection});
  $('.col-md-4').html(formMarkup.render().el);
});
