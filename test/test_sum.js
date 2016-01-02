var assert = require('assert');
var sum = require('../src/sum.js');

describe('sum', function () {
  it('12 + 23', function () {
    assert(sum(12, 23) === 35);
  });
});
