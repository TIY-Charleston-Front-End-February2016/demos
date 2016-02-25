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

$(document).ready(function () {
  myBlog.init();
});


var myBlog = {
  init: function () {
    myBlog.initEvents();
    myBlog.initStyling();
  },
  initEvents: function () {
    $('form').on('submit', myBlog.submitPost);
    $('section').on('click', '.delete', myBlog.deletePostFromDom);

  },
  initStyling: function () {
    myBlog.addAllPosts();
  },
  submitPost: function (event) {
    event.preventDefault();
    var   newPost = myBlog.getPostFromDom();
    console.log(newPost);
      myBlog.addPost(newPost);
      myBlog.addAllPosts(myBlog.getPosts());
      $('input').val('');
  },
  getPostFromDom: function getPostFromDom() {
    var title = $('input[name="title"]').val();
    var content = $('input[name="content"]').val();;
    return {
      title: title,
      content: content
    }
  },
  deletePostFromDom: function (event) {
    var idx = $(this).closest('article').data('idx');
    myBlog.deletePost(idx);
    myBlog.addAllPosts();
  },
  addAllPosts: function () {
    $('section').html('');
    _.each(myBlog.getPosts(), function (el, idx) {
      el.idx = idx;
      var tmpl = _.template(templates.post);
      $('section').append(tmpl(el));
      // addPostToDom(el, templates.post, $('section'));
    })
  },
  getPosts: function getPosts() {
    return posts;
  },
  addPost: function addPost(newPost) {
    posts.push(newPost);
  },
  deletePost: function deletePost(idx) {
    posts.splice(idx, 1);
  },
  editPost: function editPost(idx) {
    // fill in.
  }
};
