var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views','./views/pages')
app.set('view engine','jade')
app.listen(port)

// index.page
app.get('/',function(req,res){
	res.render('index',{
		title:'首页'
	});
})

// detail.page
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'详情'
	});
})

// list.page
app.get('/admin/list',function(req,res){
	res.render('list',{
		title:'列表'
	});
})

// detail.page
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:'录入'
	});
})

console.log('app listen at' + port)