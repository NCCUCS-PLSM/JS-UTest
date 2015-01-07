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
   it("calls the original function", function () {
      var spy = sinon.spy();
      var proxy = once(spy);

      proxy();
      assert(spy.called);
   })
});
