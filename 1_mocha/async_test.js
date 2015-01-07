fs = require('fs');
describe('File', function(){
   describe('#readFile()', function(){
      it('should read test.ls without error', function(done){
         fs.readFile('test.js', function(err){
            if (err) throw err;
            done();  // the deepest place of callback, implys to return 
         });
      })
   })
})
