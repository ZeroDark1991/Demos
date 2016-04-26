var express = require("express");
var utility = require("utility");

var app = express();

app.get('/',function (req,res){

	var a = req.query.a;

	var md5Value = a?utility.md5(a):'not exist';
	var sha1Value =a?utility.sha1(a):"not exist";

	res.send("md5 of a : "+md5Value+"\r sha1 of a : "+sha1Value);
}).listen(3000,function(){
	console.log("server running at port 3000");
});