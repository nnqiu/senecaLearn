/** 
 * seneca_demo
 * math服务
 * mathPlugin()
*/
var seneca = require('seneca')()

function mathPlugin(options) {
    this.add('role:math,cmd:sum', function (msg, respond) {
        respond(null, { answer: msg.left + msg.right })
    })
}
  
seneca
    .use(mathPlugin)
    .act('role:math,cmd:sum,left:1,right:2', console.log)

//  { answer: 3 }
