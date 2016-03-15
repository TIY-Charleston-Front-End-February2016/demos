var templates = {};
templates.book = [
  "<img style='' src='<%= coverImg %>'>",
  "<h3><%= title %></h3>",
  "<p><%= desc %></p>",
  "<button class='btn btn-danger delete'>delete</button>",
  "<button class='btn btn-warning showEdit'>Edit</button>",
  "<div class='editSection'>",
    '<div class="form-group">',
  "<input class='form-control editTitle' type='text' value='<%= title %>'>",
  "</div>",
    '<div class="form-group">',
  "<input class='form-control editCoverImg' type='text' value='<%= coverImg %>'>",
  "</div>",
    '<div class="form-group">',
  "<input class='form-control editDesc' type='text' value='<%= desc %>'>",
  "</div>",
  "<button class='editBook'>Edit Book</button>",
  "</div>"

].join('');

templates.addBook = [
  '<form class="">',
    '<div class="form-group">',
      '<label for="title">Title</label>',
    '<input class="form-control" type="text" name="title" placeholder="Title" value="">',
  '</div>',
    '<div class="form-group">',
      '<label for="author">Author</label>',
    '<input class="form-control" type="text" name="author" placeholder="Author" value="">',
  '</div>',
  '<div class="form-group">',
    '<label for="coverImg">Book Cover</label>',
    '<input class="form-control" type="text" name="coverImg" placeholder="Cover Image URL" value="">',
  '</div>',
  '<div class="form-group">',
'<label for="desc">Description</label>',
    '<textarea class="form-control" name="desc" rows="8" cols="40" placeholder="Description"></textarea>',
  '</div>',
    '<button class="btn btn-success" type="submit" name="Submit">Add Book</button>',
  '</form>'
].join('');
