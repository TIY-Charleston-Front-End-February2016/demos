var posts = [
  {
    title: "Hello world",
    content: "This is amazing!!!!!"
  },
  {
    title: "So you're saying there's a chance!",
    content: "I love this quote!!!!!"
  }
];

var templates = {
  post: [
    "<article data-idx='<%= idx %>'>",
       "<h2><%= title %></h2>",
       "<p><%= content %></p>",
       "<button class='delete'>delete</button>"
  ].join("")
}

function getPosts() {
  return posts;
}
function addPost(newPost) {
  posts.push(newPost);
}
function deletePost(idx) {
  posts.splice(idx, 1);
}
function editPost(idx) {
  // fill in.
}

function addPostToDom(postData, templateStr, $target) {
    var tmpl = _.template(templateStr);
    $target.append(tmpl(postData));
}

function addAllPosts(arr) {
  $('section').html('');
  _.each(getPosts(), function (el, idx) {
    el.idx = idx;
    addPostToDom(el, templates.post, $('section'));
  })
}
function getPostFromDom() {
  var title = $('input[name="title"]').val();
  var content = $('input[name="content"]').val();;
  return {
    title: title,
    content: content
  }
}

$(document).ready(function () {
  addAllPosts(posts);

  $('form').on('submit', function (event) {
    event.preventDefault();
    var newPost = getPostFromDom();
    console.log(newPost);
      addPost(newPost);
      addAllPosts(getPosts());
      $('input').val('');
  });

  $('section').on('click', '.delete', function (event) {
    var idx = $(this).closest('article').data('idx');
    deletePost(idx);
    addAllPosts(getPosts());
  });

});
