describe.skip("Mocha Hooks", function () {
  before("Execute Before all Tests", function () {
    console.log("Execute Before All Tests");
  });
  beforeEach("Execute Before Each Test", function () {
    console.log("Execute Before Each Test");
  });
  after("Execute After All Tests", function () {
    console.log("Execute After All Tests");
  });
  afterEach("Execute After Each Test", function () {
    console.log("Execute After Each Test");
  });

  it("Mocha Hooks Test", function () {
    console.log("Mocha - This is a test for mocha hooks");
  });
});
