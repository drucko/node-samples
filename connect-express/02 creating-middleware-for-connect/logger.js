// Create a logger object. The signature (res, res, next) is
// defined by Connect. req and res are the incoming request
// and the outgoing response as usual. next represents the
// middleware that was registered after the logger.
var logger = function (req, res, next) {
  // Log the requested url.
  console.log(req.url + ' was requested.');

  // Continue with the next middleware.
  next();
};

// Export the logger.
module.exports = logger;