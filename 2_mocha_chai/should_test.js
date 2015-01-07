var should = require('chai').should() //actually call the the function
   , foo = 'bar'
   , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

describe("chai should test", function(){
   it("should.be.a", function(){
      foo.should.be.a('string');
   })
   it("shoud.equal", function(){
      foo.should.equal('bar');
   })
   it("should.have.length", function(){
      foo.should.have.length(3);
   })
   it("should.have.property", function(){
      beverages.should.have.property('tea').with.length(3); 
   })
});
