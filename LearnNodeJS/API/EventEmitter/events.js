var EventEmitter = require('events').EventEmitter;

var life =new EventEmitter();

life.setMaxListeners(11);//默认为10

//(监听器)on(ar1,ar2) ar1事件名 ar2方法
life.on('事件1',function(argument){
console.log('得到参数 : '+argument + "...1");
});

function hello(argument){
	console.log('得到参数 : '+argument + "...2");
}

life.on('事件1',hello);//匿名函数不可这样移除

life.on('事件2',hello);

life.removeListener('事件1',hello);
life.removeAllListeners('事件1');
life.removeAllListeners();

life.emit('事件1','aaa');

var haslistener2 = life.emit('事件2','NNN')

console.log(life.listeners('事件1').length);