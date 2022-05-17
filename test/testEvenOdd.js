const assert = require('assert');
const { isEven, isOdd } = require('../src/evenOdd.js');

describe('Is Even', () => {
  it('Should return true for Zero.', () => {
    assert.equal(isEven(0), true);
  });
  it('Should return false for One.', () => {
    assert.equal(isEven(1), false);
  });
  it('Should return true for Ten.', () => {
    assert.equal(isEven(10), true);
  });
});

describe('Is Odd', () => {
  it('Should return false for Zero.', () => {
    assert.equal(isOdd(0), false);
  });
  it('Should return true for One.', () => {
    assert.equal(isOdd(1), true);
  });
  it('Should return false for Ten.', () => {
    assert.equal(isOdd(10), false);
  });
});
