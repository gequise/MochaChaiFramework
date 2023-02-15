const chai = require('chai');
//expect

const expect = chai.expect;

// Assert - TDD style
const assert = chai.assert;

// should()

const should = chai.should();

// expect API examples
let a = 1,
  b = 1;
expect(a).to.be.equals(b, 'a and b not equal');
a.should.be.equals(b);
assert.equal(a, b, 'a and b are not equal');

// object/string/boolean
function myObj() {
  return {
    a: 100,
    b: 'Hello',
  };
}

(x = new myObj()), (y = new myObj());
expect(x).to.be.an('object');
// expect (x).to.be.equals(y, 'x and y are not equal');
//deep.equal or deep.equals
expect(x).to.be.deep.equals(y, 'x and are not equal');
a.should.be.equals(b);
assert.deepEqual(x, y, 'X and Y are not equal');
//chaining expressions
// x is an object; x and y are equal
// keywords- and, with, but, ...
expect(x).to.be.an('object').and.to.be.deep.equals(y);
x.should.be.an('object').and.to.be.deep.equals(y);

//arrays
let numbers = [1, 2, 3, 0];
expect(numbers).to.be.an('array').that.includes(3);
numbers.should.be.an('array').that.includes(3);
assert.isArray(numbers, 'number is not an array');

// should extras
// should -> Object.Prototype - a.should
// existence of an object
function writeToAFile(error) {
  // error.should.not.exist();

  should.not.exist(error);
}

writeToAFile(undefined);
