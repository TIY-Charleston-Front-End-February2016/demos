$(document).ready(function () {
  var posts = "";

  blogPosts.forEach(function (element, idx) {
    posts += "<article data-author='"
      + element.author
      + "'>"
      + "<h3>"
      + element.title
      + "</h3>"
      + "<p>"
      + element.content
      + "</p>"
      + "</article>";

  });


  $('.blog').on('click', 'article', function (event) {
    console.log($('article').html());
      $(this).text("WE DID IT!!!!!")
  });


  // $('article').on('click', function (event) {
  //   console.log($('article').html());
  //     $(this).text("WE DID IT!!!!!")
  // });
  $('.blog').append(posts);

  // $(selector).on('eventname', 'target', callback)

  // $('.blogLink').click(function (event) {
  //   event.preventDefault();
  //   $('.blog').siblings('section').removeClass('active');
  //   $('.blog').addClass('active');
  // });
  // $('.aboutLink').click(function (event) {
  //   event.preventDefault();
  //   $('.about').siblings('section').removeClass('active');
  //   $('.about').addClass('active');
  // });
  //
  // $('.contact').click(function (event) {
  //   event.preventDefault();
  //   $('.contact').siblings('section').removeClass('active');
  //   $('.contact').addClass('active');
  // });
  var navItem = $('li').find('a');
  navItem.click(function (event) {
    event.preventDefault();
    var selectedPage = "." + $(this).attr('rel');

      // $(selectedPage).siblings('section').hide();
      // $(selectedPage).show();


    // $(selectedPage).siblings('section').css('display', 'none');
    // $(selectedPage).css('display', 'inline-block');

    // recommended
    $(selectedPage).siblings('section').removeClass('active');
    $(selectedPage).addClass('active');

  });

});
