var expect = require('chai').expect
  , foo = 'bar'
    , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
    

 describe("chai expect test", function(){
    it("to.be.a", function(){
    expect(foo).to.be.a('string');
    })

    it("to.equal", function(){
    expect(foo).to.equal('bar');
    })

    it("to.have.length",function(){
    expect(foo).to.have.length(3);
    })

    it("to.have.property", function(){
    expect(beverages).to.have.property('tea').with.length(3);
    })
 })
