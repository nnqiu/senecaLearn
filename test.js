/** 
 * seneca_demo
 * seneca.add() 添加服务
 * seneca.act() 执行服务
 * 
*/
var seneca = require('seneca')();

// 服务端模式
var pattern1 = {a: 'a', b: 'b'};
var pattern2 = {a: 'a', c: 'c'};

// 服务端action
var action1 = function (msg, done) {
    done(null, { answer: 'hello, 我是服务1,' + msg.name });
};
var action2 = function (msg, done) {
    done(null, { answer: 'hello, 我是服务2,' + msg.name });
};

// 创建两个服务，服务端添加服务
seneca.add(pattern1, action1);
seneca.add(pattern2, action2);

// 客户端模式
var req1 = {a: 'a', b: 'b', c: 'c', name:'张三', integer: true};

// 客户端执行服务
seneca.act(req1, function (error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result.answer);
    }
});
// hello, 我是服务1,张三
