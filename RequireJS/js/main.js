require.config({
	　　　　baseUrl: "js/lib",
	　　　　paths: {
		　　　　　　"jquery": "jquery-2.2.3",
	　　　　}
});

require(['jquery','hello'], function ($,hello){
	function aa(){
		$('#hello').css('color','red');
	}
	　　hello.hello();
	aa();
});

require(['jquery','hello'], function ($,hello){
	function bb(){
		$('#run').css({'color':'red','font-size':'40px'});
	}
	　　　　hello.run();
	setTimeout(function(){bb();},1000);
});