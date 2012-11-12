// Require the integrated http module.
var http = require('http');

// Create a new http server and provide a callback that will be run
// on each incoming request. Using the req and res parameters you
// have access to the incoming request and the response being sent.
var server = http.createServer(function (req, res) {

  // Send headers to the client.
  res.writeHead(200, {
    'content-type': 'text/html'
  });

  // Send data to the client.
  res.write('Hello Node.js!');

  // Close the connection.
  res.end();
});

// Call the listen function to bind the server to a port.
server.listen(3000);