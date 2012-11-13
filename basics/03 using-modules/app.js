// Require the rectangle module and name it accordingly. When
// importing a module from the file system, its path needs to
// be specified. Skip the file extension:
var rectangle = require('./rectangle');

// Call functions that were exported by the rectangle module.
console.log('Area: ' +
  rectangle.area(4, 3));
console.log('Perimeter: ' +
  rectangle.perimeter(4, 3));