
var chai = require('chai');
// var expect = chai.expect;
// var assert = chai.assert;

chai.should();

var main = require('lib/main');

describe('lib/main', function () {
  it('should bop', function () {
    main.boop().should.equal('bop');
  });
});