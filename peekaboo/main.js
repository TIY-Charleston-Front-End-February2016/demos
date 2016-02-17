$(document).ready(function () {

  $('li').click(function (event) {
    console.log($(this).attr("rel"));
    var targetClass = "." + $(this).attr('rel');
    // .about
    $('.content').removeClass('active');
    $(targetClass).addClass('active');
    // $('.about').addClass('active');
    console.log(this);
  })


});
