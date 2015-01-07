var sinon = require('sinon')
var assert = require('assert')

// Function under test
function once(fn) {
   var returnValue, called = false;
   return function () {
      if (!called) {
         called = true;
         returnValue = fn.apply(this, arguments);
      }
      return returnValue;
   };
}


describe("sinon spy type", function(){
   it("returns the return value from the original function", function () {
      var myAPI = { method: function () {} };
      var mock = sinon.mock(myAPI);
      mock.expects("method").once().returns(42);

      var proxy = once(myAPI.method);

      assert.equal(proxy(), 42);
      mock.verify();
   })
});
