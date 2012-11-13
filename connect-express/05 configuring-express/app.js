// Require Express, the integrated http module and the
// custom logger.
var express = require('express'),
    http = require('http'),
    logger = require('./logger');

// Create a new Express based application.
var app = express();

// Configure the application by using Express' configure
// function. If you omit a name for the configuration, the
// block is always used.
app.configure(function () {
  // Register the logger for use with Express. All middleware
  // compatible to Connect is automatically also compatible
  // to Express, as Express is built on Connect.
  app.use(logger(' was requested.'));
});

// If you want a special configuration, name the configuration
// block. If its name matches the NODE_ENV environment variable,
// Express will run this block additionally to the common one.
// If NODE_ENV is not set, Express assumes its value to be
// development.
app.configure('development', function () {
  // Add additional configuration here ...
});

// Provide additional configuration when running in production
// configuration. Express treats production as a special value
// and enables various optimizations when this value is set.
app.configure('production', function () {
  // Add additional configuration here ...
});

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