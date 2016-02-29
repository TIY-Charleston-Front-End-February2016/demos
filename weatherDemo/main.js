$(function () {
  page.init();
});

var page = {
  init: function () {
    page.getLocation();
  },
  initStyling: function () {},
  initEvents: function () {},
  // apiKey: "146bb637c258a60ddff2af888dd17031",
  apiKey: "302367002e0604563f3f122a44eca752",
  getLocation: function () {
    navigator.geolocation.getCurrentPosition(page.onPosition);
  },
  onPosition: function (coordsObj) {
    console.log(coordsObj.coords.latitude);
    $.ajax({
      url: page.buildForcastUrl(coordsObj.coords),
      method: "GET",
      dataType: "jsonp",
      success: function (res) {

        // here's the gold!!!  dig it :)
        console.log('response: ',res);
      }
    });
  },
  getForecast: function (data) {
    console.log(data);
  },
  buildForcastUrl: function (coords) {
    return "http://api.openweathermap.org/data/2.5/weather?lat=" +coords.latitude+ "&lon=" + coords.longitude + "&appid=" + page.apiKey;
  }
};
