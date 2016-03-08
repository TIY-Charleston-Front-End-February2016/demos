var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 2
  });

  $.ajax({
    method: 'GET',
    url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson',
    success: function(data) {
      createAllMarkers(data.features,map)
    },
    error: function(err) {
      console.log("OOOH NOOOOO", err);
    }
  });
}

function oneMarker(data,map) {
  return {
    map: map,
    radius: createRadius(data),
    center: {
      lat: data.geometry.coordinates[1],
      lng: data.geometry.coordinates[0],
    },
    strokeColor: '#00FF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#00FF00',
    fillOpacity: 0.35
  };
};

function createRadius(quake) {
  return parseInt((quake.properties.mag * 100000).toFixed(0));
}

function createAllMarkers(allEarthqakes,map) {
  allEarthqakes.forEach(function(el,idx) {
    var earthquakeCircle = oneMarker(el,map)
    var circle = new google.maps.Circle(earthquakeCircle);
    google.maps.event.addListener(circle,'mouseover',function(){
          this.getMap().getDiv().setAttribute('title',this.get('radius')/100000);});

     google.maps.event.addListener(circle,'mouseout',function(){
          this.getMap().getDiv().removeAttribute('title');});
  })
}
