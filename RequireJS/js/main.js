require.config({
	　　　　baseUrl: "js",
	　　　　paths: {
		　　　　　　"jquery": "lib/jquery-2.2.3",
	　　　　}
});

require(['hello'], function (){
	function aa(){
		$('#hello').css('color','red');
	}
	　　$.hello();
	aa();
	function bb(){
		$('#run').css({'color':'red','font-size':'40px'});
	}
	$.run();
	setTimeout(function(){bb();},1000);
});