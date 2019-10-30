module.exports = function math(options) {

    this.add('role:math,cmd:sum', function sum(msg, respond) {
        respond(null, { answer: msg.left + msg.right })
    })
  
    this.add('role:math,cmd:product', function product(msg, respond) {
         respond(null, { answer: msg.left * msg.right })
    })
  
    // 最后面的 wrap 函数中，确保了，任何传递给 role:math 的消息体中 left 与 right 值都是数字，即使我们传递了字符串，也可以被自动的转换为数字
    this.wrap('role:math', function (msg, respond) {
        msg.left  = Number(msg.left).valueOf()
        msg.right = Number(msg.right).valueOf()
        this.prior(msg, respond)
    })
}
