// Require Express, the integrated http and path modules and the
// custom logger.
var express = require('express'),
    http = require('http'),
    logger = require('./logger'),
    path = require('path');

// Create a new Express based application.
var app = express();

// Configure the application by using Express' configure
// function. If you omit a name for the configuration, the
// block is always used.
app.configure(function () {
  // Use the environment variable PORT when set, otherwise
  // default to port 3000.
  app.set('port', process.env.PORT || 3000);

  // Tell Express to look for views inside the appropriate
  // folder.
  app.set('views', path.join(__dirname, '/views'));

  // Register the ejs view engine. This requires the ejs module
  // internally and sets the file extension .ejs as default
  // extension, so that you do not need to specify it on each
  // single render call.
  app.set('view engine', 'ejs');

  // Cache the /favicon.ico file if it exists in memory. If no
  // file is found, an integrated one is used as fallback.
  app.use(express.favicon());

  // Register the logger for use with Express. All middleware
  // compatible to Connect is automatically also compatible
  // to Express, as Express is built on Connect.
  app.use(logger(' was requested.'));

  // Parse the body of each incoming request to be able to handle
  // file uploads, form posts and similar actions.
  app.use(express.bodyParser());

  // Detect tunneling of PUT and DELETE requests via POST requests
  // using the X-Http-Method-Override header.
  app.use(express.methodOverride());

  // Parse cookies and provide them as an object. Use the given
  // key for encrypting and decrypting cookies.
  app.use(express.cookieParser('your secret here'));

  // Enable session support. Please note that this only enables
  // in-memory session support which is not recommended for
  // production usage.
  app.use(express.session());

  // Run the routes that were registered for the Express
  // application.
  app.use(app.router);

  // Provide the contents of the /public folder using a static
  // file server. As this line comes after the previous one,
  // routes have a higher precendence than static files. If you
  // need to change this, reverse the order of these two lines.
  app.use(express.static(path.join(__dirname, 'public')));
});

// If you want a special configuration, name the configuration
// block. If its name matches the NODE_ENV environment variable,
// Express will run this block additionally to the common one.
// If NODE_ENV is not set, Express assumes its value to be
// development.
app.configure('development', function () {
  // Use Express' error handler module for detailed error messages
  // in development mode.
  app.use(express.errorHandler());

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
  res.render('index', { title: 'Node.js & Co.' });
});

// Create an http server and run it.
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});