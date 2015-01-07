var assert = require('chai').assert
   , foo = 'bar'
   , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

describe("try chai with mocha", function(){
   it("typeOf", function(){
      assert.typeOf(foo, 'string', 'foo is a string');
   })
       
   it("chai's equal", function(){  
       assert.equal(foo, 'bar', 'foo equal `bar`');
   })

   it("lengthOf", function(){
      assert.lengthOf(foo, 4, 'foo`s value has a length of 3');
   })

   it("lengthOf in array", function(){
      assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
   })
});
