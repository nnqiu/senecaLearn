/** 
 * 客户端
 * 使用.client()
*/
require('seneca')()
    .client()
    .act('role:math,cmd:sum,left:1,right:2',console.log)