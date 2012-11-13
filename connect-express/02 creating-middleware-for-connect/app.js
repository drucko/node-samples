// Require Connect, the integrated http module and the
// custom logger.
var connect = require('connect'),
    http = require('http'),
    logger = require('./logger');

// Create a new Connect based application.
var app = connect();

// Register the logger for use with Connect. Please note that
// the logger must conform to the (req, res, next) signature.
app.use(logger);

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