var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

console.log(process.env);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('PORT', process.env.PORT || 3000)

app.get('/:human/:pet/:food', function (req, res) {
  console.log(req.params);
  res.end("Thanks")
})
app.post('/', function (req, res) {
  console.log(req.params);
  res.json({msg: "you have submited good stuff"});
});

app.listen(app.get('PORT'), function () {
  console.log("server started on port:" + app.get('PORT'));
});

// var randomMoney = function () {
//   return Math.floor(Math.random() * 1000);
// };
// var server = http.createServer(function (request, response) {
//   console.log(request.url);
//   response.writeHead(200, {'Content-Type': 'text/html'});
//   if(request.url === '/') {
//
//     response.end("hello World!!");
//   }
//   if(request.url === '/justin') {
//     response.end("Hi Justin!! Oh wait, you're not justin.");
//   }
//   if(request.url === '/winning') {
//     response.end("<p>You have won $" + randomMoney());
//   }
// });
//
// server.listen(3000, function () {
//   console.log("server listening on port: 3000");
// });
