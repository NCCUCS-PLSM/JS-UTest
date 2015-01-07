//var sinon = require('sinon')
//var assert = require('assert')

/* function to be test */
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

/* test code */
describe("karma-mocha-chai-sino", function(){
   it("calls the original Functionn", function () {
      var callback = sinon.spy();// 建立 sinon.spy 物件
      var proxy = once(callback);

      proxy();

      assert(callback.called); // 使用 assert 方法，可替換成 chai 的 api
   })
});

