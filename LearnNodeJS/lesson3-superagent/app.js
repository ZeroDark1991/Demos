var express = require("express");
var superagent = require("superagent");
var cheerio = require("cheerio");

app = express();

app.get("/",function(req,res,next){
	superagent.get('https://cnodejs.org/')
		.end(function(err,sres){
			if(err){
				return next(err);
			}
			// sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
			// 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
			// 剩下就都是 jquery 的内容了   
			var $ = cheerio.load(sres.text);
			var item = [];
			$("#topic_list .cell").each(function(idx,ele){
				var $ele = $(ele);
				item.push({
					title: $ele.find(".topic_title").attr("title"),
					href: $ele.find(".topic_title").attr("href"),
					author : $ele.find("img").attr("title")
				});
			});
			res.send(item);   
		})
}).listen(3000,function(){
	console.log("running at port 3000");
})