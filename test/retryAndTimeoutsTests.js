var assert = require("assert");

describe.skip("Mathematical Operations - Test Suite", function () {
  beforeEach(function (done) {
    this.timeout(500);

    setTimeout(done, 3000);
  });

  var a = 10;
  var b = 10;

  it("Addition of two numbers", function (done) {
    var c = a + b;

    assert.equal(c, 20);
  });
});
