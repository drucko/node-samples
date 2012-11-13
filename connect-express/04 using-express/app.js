// Require Express, the integrated http module and the
// custom logger.
var express = require('express'),
    http = require('http'),
    logger = require('./logger');

// Create a new Express based application.
var app = express();

// Register the logger for use with Express. All middleware
// compatible to Connect is automatically also compatible
// to Express, as Express is built on Connect.
app.use(logger(' was requested.'));

// Register the application for use with Express. Different
// from Connect, single routes can be registered.
app.get('/', function (req, res) {
  res.writeHead(200, {
    'content-type': 'text/html'
  });

  res.write('Hello Node.js!');
  res.end();
});

// Create an http server and run it.
http.createServer(app).listen(3000);