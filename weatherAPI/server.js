var express = require('express');
var port = process.env.PORT || 3000;
var http = require('http');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json());

app.get('/', function(req,response) {
  response.sendFile('public');
});

app.get('/weather/:lat/:long', function(req,res,next){
  console.log("PARAMS", req.params);
  var url = "https://api.forecast.io/forecast/854526c92cddcc6edaca6e044dc11acf/" + req.params.lat + ',' + req.params.long;
  request.get({url: url}, function(err, response) {
    console.log("ERR: ", err);
    console.log("RESPONSE: ", response.body);
    res.send(JSON.parse(response.body));
  });
});

app.listen(port, function() {
  console.log(" LISTENING ON PORT " + port);
});
