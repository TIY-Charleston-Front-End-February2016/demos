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
  var postTemplate = _.template($('#postTmpl').html());
  console.log(postTemplate(post));
  return postTemplate(post);
}

function appendStrToElement(htmlStr, $element, replace) {
  if (replace === true) {
    return $element.html(htmlStr);
  } else {
    return $element.append(htmlStr);
  }
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
