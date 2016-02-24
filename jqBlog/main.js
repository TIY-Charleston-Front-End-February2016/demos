$(document).ready(function() {
  blogPage.init();
});
var blogPage = {
  init: function() {
    blogPage.styling();
    blogPage.events();
  },

  styling: function() {
    blogPage.addToPage('blogPost',blogPosts,'section');
  },

  events: function() {
    /* Toggle Authors Tab */
    $('.authors').on('click', function(event) {
      event.preventDefault();
      var clickedText = $(this).text();
      if(clickedText === 'Authors') {
        blogPage.addToPage('authors',authors,'section');
      } else {
        blogPage.addToPage('blogPost',blogPosts,'section');
      }
    });

    /* Add new Post */
    $('input[type="submit"]').on('click',function(event) {
      event.preventDefault();
      blogPage.addPost();
      blogPage.addToPage('blogPost',blogPosts,'section');
    });

    /* Edit Post */
    $('section').on('click','.edit-post', function(event) {
      event.preventDefault();
      var $editableString = $(this).siblings().find('p')
      var postIdx = $(this).parent().data('id');
      $editableString.attr('contenteditable', 'true');
      $(this).on('click', function(event) {
        var newContent = $editableString.text();
        blogPage.editPost(postIdx,newContent,blogPosts);
        blogPage.addToPage('blogPost',blogPosts, 'section');
      });
    });

    /* Delete Post */
    $('section').on('click','.delete-post', function(event) {
      event.preventDefault();
      var postIdx = $(this).parent().data('id');
      blogPage.deletePost(postIdx,blogPosts);
      blogPage.addToPage('blogPost',blogPosts, 'section');
    })
  },

  /* Get all Posts from Post Array */
  getPosts: function(existingBlogPosts) {
    return existingBlogPosts;
  },
  getTemplate: function(templateName) {
    return templates[templateName];
  },
  constructTmpl: function(templateName,data) {
    var tmpl = blogPage.getTemplate(templateName);
    var tmplFunc = _.template(tmpl);
    return tmplFunc(data);
  },
  addToPage: function(templateName,dataArray,target) {
    var htmlStr = "";
    dataArray.forEach(function(blog) {
      htmlStr += blogPage.constructTmpl(templateName,blog);
    })
    return $(target).html(htmlStr);
  },
  addPost: function() {
    var blogsArray = blogPage.getPosts(blogPosts);
    var newPost = blogPage.getPostSubmission();
    blogsArray.push(newPost);
  },
  getPostSubmission: function() {
    var blogsArray = blogPage.getPosts(blogPosts);
    var author = $($('input[name="author"]').last()[0]).val();
    var body = $('textarea').val();
    var title = $($('input[type="text"]').first()[0]).val();
    $($('input[name="author"]').last()[0]).val("")
    $('textarea').val("");
    $($('input[type="text"]').first()[0]).val("");
    return {
      idx: blogsArray.length,
      title: title,
      author: author,
      body: body,
      tags: ['jquery','dogs']
    }
  },
  editPost: function(idx,newPost,posts) {
    var blog = blogPage.getPosts(posts)
    console.log(blog)
    var post = _.where(blogPosts,{idx: idx})[0];
    console.log(post);
    post.body = newPost;
    return post;
  },
  deletePost: function(idx,posts) {
    var posts = blogPage.getPosts(posts);
    return delete(posts[idx]);
  }
};








// function deletePost(idx) {
//   return delete(blogPosts[idx]);
// }

// function editPost(idx,newPost) {
//   var blog = _.where(blogPosts,{idx: idx})[0];
//   blog.body = newPost;
//   return blog;
// }

// function constructBlogHtml() {
//   var posts = getBlogPosts(blogPosts);
//   var giantStr = "";
//   posts.forEach(function() {
//       giantStr += "ul "
//   });
//   return giantStr;
// }
//
// function createBlogPostStr(post) {
//   var blogText = templates.blogPost;
//   var postTemplate = _.template(blogText);
//   return postTemplate(post);
// }
//
// function appendStrToElement(htmlStr, $element, replace) {
//   if (replace === true) {
//     return $element.html(htmlStr);
//   } else {
//     return $element.append(htmlStr);
//   }
// };

// function grabPostSubmission() {
//   var author = $($('input[type="text"]').last()[0]).val();
//   var body = $('textarea').val();
//   var title = $($('input[type="text"]').first()[0]).val();
//   $($('input[type="text"]').last()[0]).val("")
//   $('textarea').val("");
//   $($('input[type="text"]').first()[0]).val("");
//   return {
//     author: author,
//     body: body,
//     title: title,
//   }
// };
//
// $('input[type="submit"]').click(function(event) {
//   event.preventDefault();
//   var post = grabPostSubmission();
//   var blogStr = createBlogPostStr(post)
//   appendStrToElement(blogStr,$('section'));
//   return
// })

// $('header').on('click','.authors',function(event) {
//   event.preventDefault();
//   $about = $('#authors-page');
//   $blogs = $('#blogs');
//   $authorBtn = $('.authors');
//   $about.siblings('#blogs').toggleClass('dont-show-me');
//   $about.toggleClass('dont-show-me');
//
//
//   // Add Authors;
//   var authorsHtmlStr = templates.authors;
//   var authorTmpl = _.template(authorsHtmlStr);
//   var fillStr = "";
//   authors.forEach(function(el) {
//     fillStr += authorTmpl(el);
//   })
//   $('#authors-page').html(fillStr);
//   if($authorBtn.text() === "Authors") {
//     $authorBtn.text('Back');
//   } else {
//     $authorBtn.text("Authors");
//   }
// });

$('.search').on('keyup',function(event) {
  var userInput = $(this).find('input').val();
  var filteredBlogsByUserInput = blogPosts.filter(function(element) {
    return element.tags.indexOf(userInput) !== -1;
  });
  if(filteredBlogsByUserInput.length > 0) {
    var postTemplate = _.template($('#postTmpl').html())
    var postHtmlStr = "";
    var arrayOfPostStr = filteredBlogsByUserInput.forEach(function(post) {
      postHtmlStr += postTemplate(post);
    })
    $('section').html(postHtmlStr);
  }
});


// $('section').on('click','.edit-post', function(event) {
//   event.preventDefault();
//   var $editableString = $(this).siblings().find('p')
//   $editableString.attr('contenteditable', 'true');
//   var postIdx = $(this).parent().data('id');
//   // $(this).unbind("click",'.edit-post');
//   $(this).on('click', function(event) {
//     if($editableString.attr('contenteditable')) {
//       $editableString.attr('contenteditable', 'false');
//     }
//     var newContent = $editableString.text();
//     editPost(postIdx,newContent);
//     appendStrToElement(constructBlogHtml(),$('section'),true);
//   })
// })
//
// $('section').on('click','.delete-post', function(event) {
//   event.preventDefault();
//   var postIdx = $(this).parent().data('id');
//   deletePost(postIdx);
//   appendStrToElement(constructBlogHtml(),$('section'),true);
// })
