// 下面这两种方式都是等价的（还记得我们前面讲过的 `seneca.use` 方法的两个参数吗？）
require('seneca')()
  .use('mathServer') // 在当前目录下找到 `./math.js`
  .act('role:math,cmd:sum,left:1,right:2', console.log)