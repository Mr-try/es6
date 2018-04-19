/****** CommonJs*******/
// 定义模块 myModule.js
const name = 'xxxx'
function printName(){
    console.log(name)
}
function printFullName(firstname){
    console.log(firstname+name)
}
module.exports = {
    printName:printName,
    printFullName:printFullName
}
// 加载模块 index.js
const nameModule = require('./myModule.js')
/*
    require是同步的。模块系统需要同步读取模块文件内容，并编译执行以得到模块接口。
    这在服务器端实现很简单，也很自然，然而， 想在浏览器端实现问题却很多。
    浏览器端，加载JavaScript最佳、最容易的方式是在document中插入script 标签。
    但脚本标签天生异步，传统CommonJS模块在浏览器环境中无法正常加载。
    解决思路之一是，开发一个服务器端组件，对模块代码作静态分析，将模块与它的依赖列表一起返回给浏览器端。 
    这很好使，但需要服务器安装额外的组件，并因此要调整一系列底层架构。
    另一种解决思路是，用一套标准模板来封装模块定义，但是对于模块应该怎么定义和怎么加载，又产生的分歧
 */

 /******AMD(requireJs)********/
 // 在定义模块的时候就要声明其依赖额模块
 // 定义模块 myModule.js
 define(['dependency'], function() {
     const name = 'xxxx'
     function printName(){
         console.log(name)
     }

     return {printName:printName}
 });

 // 加载模块 index.js
 require([myModule],function(my){
     my.printName()
 })
 /*
    require()函数在加载依赖的函数的时候是异步加载的，
    这样浏览器不会失去响应，它指定的回调函数，只有前面的模块都加载成功后，
    才会运行，解决了依赖性的问题。
  */

  /********CMD(seaJs)*********/
  // 只有用到某个模块的时候再去require
  // 定义模块myModule.js
  define(function(require,exports,module){
      var $ = require(jquery.js)
      $('div').addClass('active')
  })
  // 加载模块 index.js
  seajs.use(['myModule.js'],function(my){
      // do something
  })

  // CMD AMD对依赖模块执行的时机处理不同导致 
  // AMD用户体验好,因为没有延迟，依赖模块提前执行了
  // CMD性能好，因为只有用户需要的时候才执行