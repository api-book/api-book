const load = require('require-directory');
const lodash = require('lodash');
module.exports = lodash.flatMap(load(module))