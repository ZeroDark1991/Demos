var http = require('http');
var querystring = require('querystring');

var postData = {
	"xx" : xx,
}

var option = {
	hostname : 'www.cnode.org',
	port : 80,
	path :'/',
	method : 'POST',
	headers : {

	}
}

var req = http.request(option,function(res){
	console.log('status : '+ res.status);
	console.log('headers : '+ JSON.stringify(res.headers));
    //流形势传递数据，data事件监听
	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	});

	res.on('end',function(){
		console.log("评论完毕！");
	})

})

req.on('error',function(e){
	console.log('Error: ' + e.message);
})

req.write(postData);
req.end();