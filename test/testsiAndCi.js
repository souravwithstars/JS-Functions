const assert = require('assert');
const { simpleInterest, compoundInterest } = require('../src/siAndCi.js');

describe('Simple Interest', () => {
  it('Should give Zero if amount is Zero', () => {
    assert.equal(simpleInterest(0, 10, 1), 0);
  });
  it('Should give the calculated Simple Interest', () => {
    assert.equal(simpleInterest(100, 10, 2), 20);
  });
});

describe('Compound Interest', () => {
  it('Should give Zero if amount is Zero', () => {
    assert.equal(compoundInterest(0, 10, 1), 0);
  });
  it('Should give the calculated Compound Interest', () => {
    assert.equal(compoundInterest(100, 10, 2), 21);
  });
});
