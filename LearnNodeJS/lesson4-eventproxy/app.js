var cheerio = require("cheerio");
var eventproxy = require("eventproxy");
var superagent = require("superagent");
var async = require('async');
var url = require("url");

var cnodeUrl = 'https://cnodejs.org/';

superagent.get(cnodeUrl)
		  .end(function(err,res){
		  	if(err){
		  		return console.error(err);
		  	}
		  	var topicUrls =[];
		  	var $ = cheerio.load(res.text);

			//获得首页所有帖子的href
		  	$('#topic_list .topic_title').each(function(idx,item){
				var $item = $(this);

				//拼接hostname 与 pathname
                var herf = url.resolve(cnodeUrl,$item.attr("href"));
                topicUrls.push(herf);
		  	});

		  	var ep = new eventproxy();
		  	ep.after('topic.html',topicUrls.length,function(list){
				// after方法适合重复的操作，比如读取10个文件，调用5次数据库等。
				// 将handler注册到N次相同事件的触发上。
				// 达到指定的触发数，handler将会被调用执行，
				// 每次触发的数据，将会按触发顺序，存为数组作为参数传入。

				// 在所有文件的异步执行结束后将被执行，由第二个参数length控制重复操作的次数
				// 所有文件的内容都存在list数组中

		  		//list是一个数组，包含了40次ep.emit('topic_html', pair)中的那40次pair
                topics = list.map(function(topicPair){
                	var topicUrl = topicPair[0];
                	var topicHtml = topicPair[1];

                	var $ = cheerio.load(topicHtml);

					return ({
					title: $('.topic_full_title').text().trim(),
					href: topicUrl,
					comment1: $('.reply_content').eq(0).text().trim(),
					});
                })

                console.log('final result:');
                console.log(topics);
		  	});

			//增加async.eachLimit()方法，控制并发数量
			//解决爬太快，被服务器拒绝访问部分topic的情况。
			async.eachLimit(topicUrls, 5, function(topicUrl,callback) {
				superagent.get(topicUrl)
				.end(function(err, res) {
					console.log('fetch ' + topicUrl + ' successful');
					console.log(res.status);
					ep.emit('topic.html', [topicUrl, res.text]);
					callback();
				});
			}, function(err) {
				console.log(err);
			});
		  });