var expect = chai.expect;
var should = chai.should();


describe('when creating an earthquake map', function() {
  describe('initializing the map', function() {

    before(function() {
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 2
        });
      }
    })

    it('should exists on the page', function() {
      expect(map).to.be.an('object');
      map.should.have.property('zoom');
      expect(map.zoom).to.eq(2);
    })
  })

  describe('creating individual markers', function() {
    beforeEach(function() {
      quake = {"type":"Feature","properties":{"mag":4.6,"place":"195km SSE of L'Esperance Rock, New Zealand","time":1457440717340,"updated":1457447777483,"tz":-720,"url":"http://earthquake.usgs.gov/earthquakes/eventpage/us10004w03","detail":"http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us10004w03.geojson","felt":0,"cdi":1,"mmi":null,"alert":null,"status":"reviewed","tsunami":0,"sig":326,"net":"us","code":"10004w03","ids":",us10004w03,","sources":",us,","types":",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,","nst":null,"dmin":3.72,"rms":0.69,"gap":210,"magType":"mb","type":"earthquake","title":"M 4.6 - 195km SSE of L'Esperance Rock, New Zealand"},"geometry":{"type":"Point","coordinates":[-177.898,-32.9776,35]},"id":"us10004w03"}
      console.log(quake);
    })


    it('should properly calculate the radius', function() {
      var correctRadius = createRadius(quake);
      expect(correctRadius).to.eq(460000);
    })


    it('should return the radius and center of an earthquake thing', function() {
      var earthquakeMarker = oneMarker(quake);
      earthquakeMarker.should.have.property('radius');
      earthquakeMarker.should.have.property('center');
      earthquakeMarker.center.should.be.an('object');
      expect(earthquakeMarker.center.lat).to.be.a("number");
      expect(earthquakeMarker.center.lat).to.eq(-32.9776);
    })
  })
})
