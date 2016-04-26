var express = require('express');
var app = express();

app.get('/',function (req,res){
	res.send("hello node");
}).listen(3000,function (){
	console.log('app is listen at port 3000');
});