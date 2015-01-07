
#Install and use
1. `npm install -g mocha` 安裝完以後，就可以直接用 mocha 指定來執行測試
2. 執行測試，mocha 會自動執行檔名為 test.js 的檔案，如果沒有會出現錯誤，你可以用 `mocha <testfile>` 來執行測試

#Usage
```
var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
```
###require
`var assert = require('assert')` 

這個模組其實是 node.js 內建的，提供 assertion 相關 API

###describe
`describe(moduleName, testDetails)`

形成一個測試區塊

`moduleName` 是要用到的測試模組名稱，那是測試人員隨便取的

`testDetails` 放置測試內容，以 callback 實作

###it
`it (info, function)`

最基本的測試單元，通常一個 it 對應一個實際的 test case

`info` 是輸出訊息

`function` 放是這種 test assertion

#Asynchronize
```
fs = require('fs');
describe('File', function(){
    describe('#readFile()', function(){
        it('should read test.ls without error', function(done){
            fs.readFile('test.ls', function(err){
                if (err) throw err;
                done();
            });
        })
    })
})
```
`done()` 用來指示抵達 callback 串的最深處，開始要一層層返回，这里可能会有个疑问，假如我有两个异步函数（两条分叉的回调链），那我应该在哪里加done()呢？实际上这个时候就不应该在一个it里面存在两个要测试的函数，事实上 "一个it里面只能调用一次done"，当你调用多次done的话mocha会抛出错误。所以应该类似这样：(這部份是大陸網友加上去的，官網沒有提到這個，但很實用)
```
fs = require('fs');
describe('File', function(){
    describe('#readFile()', function(){
        it('should read test.ls without error', function(done){
            fs.readFile('test.ls', function(err){
                if (err) throw err;
                done();
            });
        })
        it('should read test.js without error', function(done){
            fs.readFile('test.js', function(err){
                if (err) throw err;
                done();
            });
        })
    })
})
```

#Hook
```
describe('hooks', function() {
  before(function() {
    // 全部測試開始前就執行這裡
  })
  after(function(){
    // 全部測試結束後才執行這裡
  })
  beforeEach(function(){
    // 每個測試開始前都執行這裡
  })
  afterEach(function(){
    // 每個測試結束後都執行這裡
  })
  
  /* test cases */
})
```

#Pending
一般适用情况比如负责测试框架的写好框架让组员去实现细节，或者测试细节尚未完全正确实现先注释以免影响全局测试情况。这种时候 mocha 会默认该测试 pass。
作用有点像 Python 的 pass。
```
describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
        })
    })
});
```

#Exclusive & Inclusive
```
fs = require('fs');
describe('File', function(){
    describe('#readFile()', function(){
    	 /* skip 的 case */
        it.skip('should read test.ls without error', function(done){
            fs.readFile('test.ls', function(err){
                if (err) throw err;
                done();
            });
        })
        
        /* only 的 case */
        it('should read test.js without error', function(done){
        })
    })
})
```
上面的代码只会有一个test complete，只有only的会被执行，另一个会被忽略掉。每个函数里只能有一个only。如果是it.skip ，那么该case就会被忽略。

only和skip共用没有什么实际意义，因为only的作用会把skip屏蔽掉。

#BDD & TDD
* BDD: behavior driven development
* TDD: test driven development

mocha默认的模式是Behavior Driven Develop (BDD)，要想执行TDD的test的时候需要加上参数，如:

`mocha -u tdd test.js`

#Final
基本 API 就是這樣，官網沒有過多文件，而 mocha 有些有趣的用法也請見官網