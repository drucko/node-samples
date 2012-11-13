// Require Connect and the integrated http module.
var connect = require('connect'),
    http = require('http');

// Create a new Connect based application.
var app = connect();

// Register the application for use with Connect.
app.use(function (req, res) {
  res.writeHead(200, {
    'content-type': 'text/html'
  });

  res.write('Hello Node.js!');
  res.end();
});

// Create an http server and run it.
http.createServer(app).listen(3000);