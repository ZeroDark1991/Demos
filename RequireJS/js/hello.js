define(["jquery"],function($){
  $.extend({
    hello : function(){
      $('#hello').text("hello world");
    },
    run : function(){
      $('#run').text("run!!");
    }
  });
});