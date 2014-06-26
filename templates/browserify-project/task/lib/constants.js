
var MAIN = 'lib/main.js';
var DEV = 'dev.js';
var PROD = 'prod.js';
var BUILD = 'build'

var pack = {};

pack.getMain = function () {
  return MAIN;
};

pack.getBuild = function () {
  return BUILD;
};

pack.getDev = function () {
  return DEV;
};

pack.getProd = function () {
  return PROD;
}

module.exports = pack;