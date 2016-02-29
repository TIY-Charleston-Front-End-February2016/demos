$(function () {
  page.init();
});

var page = {
  init: function () {
    // im just calling this for demo purposes, but you probably are wiring up other things as well, so you'll likely call .initEvents() and/or .initStyling() instead.
    page.getLocation();
  },
  initStyling: function () {},
  initEvents: function () {},
  apiKey: "302367002e0604563f3f122a44eca752",
  getLocation: function () {
    // this is a native javascript method built into most browsers, the getCurrentPosition takes a function aka callback once the user gives permission to get their location.
    navigator.geolocation.getCurrentPosition(page.onPosition);
  },
  // we're creating this onPosition function so that we can call ajax when we get the users' current postion
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
  // we're using this getForecast function to put stuff in our popup or markup, but you can break up how you want.
  getForecast: function (data) {
    console.log('in getForecast data, and its your data, or dada dada - haha!!', data);
    $('body').html(JSON.stringify(data));
  },
  // similar to the onPosition function, my url is location dependent on coordinates, so im building that dynamically when i have the coords available
  buildForcastUrl: function (coords) {
    return "http://api.openweathermap.org/data/2.5/weather?lat=" +coords.latitude+ "&lon=" + coords.longitude + "&appid=" + page.apiKey;
  }
};
