appendStrToElement(constructBlogHtml(),$('section'));


function getBlogPosts(existingBlogPosts) {
  return existingBlogPosts;
}

function constructBlogHtml() {
  var posts = getBlogPosts(blogPosts);
  var giantStr = "";
  giantStr = posts.map(createBlogPostStr);
  return giantStr;
}

function createBlogPostStr(post) {
  var postsHtmlStr = "";
  postsHtmlStr += "<ul><li><h3> Title: " + post.title + "</h3></li>";
  postsHtmlStr += "<li><p>" + post.body + "</p></li>";
  postsHtmlStr += "<li><h6>" + post.author + "</h6></li>";
  postsHtmlStr += "</ul>"
  return postsHtmlStr;
}

function appendStrToElement(htmlStr, $element) {
  return $element.append(htmlStr);
};

function grabPostSubmission() {
  var author = $($('input[type="text"]').last()[0]).val();
  var body = $('textarea').val();
  var title = $($('input[type="text"]').first()[0]).val();
  $($('input[type="text"]').last()[0]).val("")
  $('textarea').val("");
  $($('input[type="text"]').first()[0]).val("");
  return {
    author: author,
    body: body,
    title: title,
  }
};

$('input[type="submit"]').click(function(event) {
  event.preventDefault();
  var post = grabPostSubmission();
  var blogStr = createBlogPostStr(post)
  appendStrToElement(blogStr,$('section'));
  return
})

$('header li:first-child').click(function(event) {
  event.preventDefault();
  $about = $('#about-page');
  $blogs = $('#blogs');
  $headerFirstLI = $('header li:first-child')
  if($about.hasClass('dont-show-me')) {
    $about.removeClass('dont-show-me');
    $blogs.addClass('dont-show-me');
    $headerFirstLI.text('Back');
  } else {
    $blogs.removeClass('dont-show-me');
    $about.addClass('dont-show-me');
    $headerFirstLI.text('About');
  }

});
