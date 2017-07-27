/* Load the HTTP library */
var http = require("http");

var client_id = '6cbfcfb038624f5180940f32a3892e7e'; // Your client id
var client_secret = '3a61852cf2684d97b0d52784994a9c04'; // Your secret
var redirect_uri = ''; // Your redirect uri

/* Create an HTTP server to handle responses */
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
