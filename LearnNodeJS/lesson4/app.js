var cheerio = require("cheerio");
var eventproxy = require("eventproxy");
var superagent = require("superagent");
var url = require("url");

var cnodeUrl = 'https://cnodejs.org/';

superagent.get(cnodeUrl)
		  .end(function(err,res){
		  	if(err){
		  		return console.error(err);
		  	}
		  	var topicUrls =[];
		  	var $ = cheerio.load(res.text);

		  	$('#topic_list .topic_title').each(function(idx,item){
				var $item = $(this);
                var herf = url.resolve(cnodeUrl,$item.attr("href"));
                topicUrls.push(herf);
		  	});

		  	console.log(topicUrls);
		  });