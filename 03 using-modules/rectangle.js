// Create objects and functions. As long as they are not exported
// explicitly, they are private to this file.
var rectangle = {
  area: function (width, height) {
    return width * height;
  },

  perimeter: function (width, height) {
    return 2 * width + 2 * height;
  }
};

// Export the rectangle object and all its functions.
module.exports = rectangle;

// Alternatively, export the functions explicitly by assigning
// them to properties of the module.exports object:
// module.exports.area = rectangle.area;
// module.exports.perimeter = rectangle.perimeter;

// Or, alternatively, export only a single function by assigning
// it to the module.exports object. Please note that in this case
// now a function is exported, not an object containing functions,
// hence you need to change the import accordingly:
// module.exports = rectangle.area;