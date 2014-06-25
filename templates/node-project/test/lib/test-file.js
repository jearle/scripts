
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

chai.should();

var testFile = require('lib/test-file');

describe('lib/test-file', function () {

  it('should expect', function () {
    expect(testFile.test()).to.equal('hello!');
  });

  it('should assert', function () {
    assert.equal(testFile.test(), 'hello!');
  });

  it('should should', function () {
    testFile.test().should.equal('hello!');
  });

});