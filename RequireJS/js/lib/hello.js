define(function(){
  function hello(){
  	$('#hello').text("hello world");
  }
  function run(){
  	$('#run').text("run!!");
  }  
  return {
  	hello : hello,
  	run : run
  }
});