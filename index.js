var Conversion = require('transformer-conversion');
var tString = require('transformer.string');
var tNumber = require('transformer.number');
// require any other modules you may need here.

module.exports = Conversion(tString, tNumber, convert);

function convert(str) {
  return parseFloat(str);
};
