var transformer = require('dat-transformer');
var tString = transformer('string');
var tNumber = transformer('number');
// require any other modules you may need here.

module.exports = transformer.Conversion(tString, tNumber, convert);

function convert(str) {
  return parseFloat(str);
};
