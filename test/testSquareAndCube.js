const assert = require('assert');
const { square, cube } = require('../src/squareAndCube.js');

describe('Square', () => {
  it('Should give Zero', () => {
    assert.equal(square(0), 0);
  });
  it('Should give Square of given Number', () => {
    assert.equal(square(5), 25);
  });
});

describe('Cube', () => {
  it('Should give Zero', () => {
    assert.equal(cube(0), 0);
  });
  it('Should give Cube of given Number', () => {
    assert.equal(cube(5), 125);
  });
});
