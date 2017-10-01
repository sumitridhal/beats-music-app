var fs = require('fs');
var https = require('https');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var Spotify = require('node-spotify-api');
var request = require('request'),
  username = "6cbfcfb038624f5180940f32a3892e7e",
  password = "3a61852cf2684d97b0d52784994a9c04",
  url = "https://accounts.spotify.com/api/token",
  auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

var formData = {
  grant_type: 'client_credentials',
};

var spotify = new Spotify({
  id: '6cbfcfb038624f5180940f32a3892e7e',
  secret: '3a61852cf2684d97b0d52784994a9c04'
});

app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send({title: 'Spotify', results: null})
})

app.get('/login', function (req, res) {
  var scopes = 'user-read-private user-read-email';
  var redirect_uri = 'http://localhost:4200/#/browse';
  res.redirect('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + username +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(redirect_uri));
})

app.get('/token', function (req, res) {
  request({
      url: url,
      form: formData,
      headers: {
        "Authorization": auth
      },
      method: 'POST',
    },
    function(error, response, body) {
      res.send(JSON.parse(body));
    }
  );
})

app.post('/', function (req, res) {
  var type = req.body.type;
  var query = req.body.query;

  spotify.search({ type: type, query: query }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  res.send(data)
  });
})

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app).listen(443);
