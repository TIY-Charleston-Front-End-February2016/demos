var templates = {
  post: [
    "<article data-postid='<%= _id %>'>",
       "<h2><%= title %></h2>",
       "<p><%= content %></p>",
       "<div class='editing'>",
       "<input type='text' class='editTitle' value='<%= title %>'>",
       "<input type='text' class='editContent' value='<%= content %>'>",
       "<button class='submitEdit'>Submit Edit</button>",
       "</div>",
       "<button class='showEdit'>Edit</button>",
       "<button class='delete'>delete</button>"
  ].join("")
}

$(document).ready(function () {
  myBlog.init();
});


var myBlog = {
  url: 'http://tiny-tiny.herokuapp.com/collections/posts',
  init: function () {
    myBlog.initEvents();
    myBlog.initStyling();
  },
  initEvents: function () {
    $('form').on('submit', myBlog.submitPost);
    $('section').on('click', '.delete', myBlog.deletePostFromDom);
    $('section').on('click', '.showEdit', myBlog.showEdit);
    $('section').on('click', '.submitEdit', myBlog.editPostInDom);

  },
  initStyling: function () {
    myBlog.getPosts();
  },
  showEdit: function (evt) {
    evt.preventDefault();
    $(this).siblings('.editing').toggleClass('active');
  },
  submitPost: function (event) {
    event.preventDefault();
    var   newPost = myBlog.getPostFromDom();
    console.log(newPost);
      myBlog.addPost(newPost);

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
  editPostInDom: function (evt) {
    evt.preventDefault();
    var editedPost = {
      _id: $(this).closest('article').data('postid'),
      title: $(this).siblings('.editTitle').val(),
      content: $(this).siblings('.editContent').val()
    };
    myBlog.editPost(editedPost);
  },
  deletePostFromDom: function (event) {
    var postId = $(this).closest('article').data('postid');
    myBlog.deletePost(postId);
    myBlog.addAllPostsToDom();
  },
  addAllPostsToDom: function (postsArr) {
    $('section').html('');
    _.each(postsArr, function (el) {

      var tmpl = _.template(templates.post);
      $('section').append(tmpl(el));
      // addPostToDom(el, templates.post, $('section'));
    })
  },
  getPosts: function getPosts() {

    $.ajax({
      url: myBlog.url,
      method: 'GET',
      success: function (blogPosts) {
        console.log(blogPosts);
        myBlog.addAllPostsToDom(blogPosts);
      },
      error: function (err) {
        console.log(err);
      }
    });

  },
  addPost: function addPost(newPost) {
    $.ajax({
      url: "http://tiny-tiny.herokuapp.com/collections/posts",
      method: 'POST',
      data: newPost,
      success: function (response) {
        myBlog.getPosts();
      },
      error: function (err) {
        console.log("error", err);
      }
    })

  },
  deletePost: function deletePost(postId) {
    console.log("http://tiny-tiny.herokuapp.com/collections/posts" + '/' + postId);
    $.ajax({
      url: myBlog.url + '/' + postId,
      method: 'DELETE',
      success: function (response) {
        myBlog.getPosts();
      }
    });
  },
  editPost: function editPost(editedPostObj) {
    var id = editedPostObj._id;
    delete editedPostObj._id;
    console.log('obj should not have _id: ', editedPostObj);
    $.ajax({
      url: myBlog.url + '/' + id,
      method: 'PUT',
      data: editedPostObj,
      success: function (response) {
        myBlog.getPosts();
      },
      error: function (err) {
        console.log("errorrrrrrrrrr", err);
      }
    });
  }
};
