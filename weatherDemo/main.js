$(function () {
  page.init();
});

var page = {
  init: function () {
    page.getLocation();
  },
  initStyling: function () {},
  initEvents: function () {},
  apiKey: "302367002e0604563f3f122a44eca752",
  getLocation: function () {
    navigator.geolocation.getCurrentPosition(page.onPosition);
  },
  onPosition: function (coordsObj) {
    console.log('this is the object containing lat and lng: ', coordsObj);
    $.ajax({
      url: page.buildForcastUrl(coordsObj.coords),
      method: "GET",
      dataType: "jsonp",
      success: function (responseFromWeatherAPI) {

        // here's the gold!!!  dig it :)
        console.log('response: ',responseFromWeatherAPI);
        // you can use a separate function to do stuff with the data:
        page.getForecast(responseFromWeatherAPI);
      }
    });
  },
  getForecast: function (data) {
    console.log('in getForecast data, and its your data, or dada dada - haha!!', data);
  },
  buildForcastUrl: function (coords) {
    return "http://api.openweathermap.org/data/2.5/weather?lat=" +coords.latitude+ "&lon=" + coords.longitude + "&appid=" + page.apiKey;
  }
};
