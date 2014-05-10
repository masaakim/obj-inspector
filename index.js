
module.exports = function (obj) {
  var util = require('util');
  console.log(util.inspect(obj, false, null));
};
