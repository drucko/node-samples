// Create a logger object. As this is a configurable logger,
// not the logger itself, but its setup function is being
// exported. The setup function then returns the logger with
// the signature (res, res, next) defined by Connect.
var logger = function (message) {
  return function (req, res, next) {
    // Log the requested url and make use of the message
    // that was given to the setup function.
    console.log(req.url + message);

    // Continue with the next middleware.
    next();
  };
};

// Export the logger.
module.exports = logger;