// var apiKey = '854526c92cddcc6edaca6e044dc11acf';
// var url = 'https://api.forecast.io/forecast/';

var page = {
  url: 'http://localhost:3000/weather/',
  init: function() {

  },
  styling: function() {

  },
  events: function() {

  },
  buildForecastUrl: function(lat,long) {
  },
  grabLatLon: function() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var forecastUrl = page.url + lat + "/" + lon;
        page.getCurrentWeather(forecastUrl);
      })
    }
  },
  getCurrentWeather: function(url) {
    $.getJSON(url,function(data) { console.log("PUHLEASE", data) });
  }


}
