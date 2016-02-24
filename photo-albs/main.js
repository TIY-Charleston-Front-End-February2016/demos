var albumsTmpl = _.template(albumTemplates.album);
var photosTmpl = _.template(albumTemplates.photo);
$(document).ready(function () {

  // out the gate, add albums to home view
  albumData.forEach(function (el) {
    // console.log(albumsTmpl(el));
    $('.home').append(albumsTmpl(el));
  });




  $('.goHome').on('click', function (event) {
    // click inside of header, is a button
    // need to go up to header, find sibling that is home class
    // remove siblings that have current class
    // add current class to .home div
    $(this).closest('header').siblings().removeClass('current');
    $('.home').addClass('current');


  });
  $('.home').on('click', 'img', function (event) {
      // show albumView and hide home view by adding .current class
      var $homePage = $(this).closest('.home');
      var selectedAlbum = $(this).closest('article').attr('rel');
      // use this to find closest home
      // remove current class from .home
      $homePage.removeClass('current');
      // add .current class to albumView
      $homePage.siblings('.albumView').addClass('current');

      $('.albumView h2').text(selectedAlbum);

      addPhotos(albumData, selectedAlbum, photosTmpl, $('.albumView section'));


  });

function addPhotos(data, albumName, tmpl, $target) {
  var selectedAlbumData = data.filter(function (el) {
    return el.albumName === albumName;
  });
  var photosHtml = "";
  selectedAlbumData[0].photos.forEach(function (item) {
    photosHtml += tmpl({photo: item });
  });
  console.log(photosHtml);
  $target.html(photosHtml)
  // $('.albumView section').html(photosHtml);
}


});
