/* import mocha module */
var assert = require('assert');

/* descibe funciton forms a test block */
describe('Array', function(){    // 1st para is testing module name, 2nd is testing block
   describe('#indexOf()', function(){
      it('should return -1 when the value is not present', function(){  // it function form a test case
         assert.equal(-1, [1, 2, 3].indexOf(5)) // the value of two paras should be matched
         assert.equal(-1, [1, 2, 3].indexOf(0))
      })
   })
});


