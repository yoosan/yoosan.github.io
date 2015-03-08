$(document).ready(function() {
	$('section > div >div > div >#projects').click(function(){
		window.open("projects.html");
	});
	$('section > div >div > div >#github').click(function(){
		window.open("http://github.com/cliviazhou");
	});
	$('section > div >div > div >#linkedin').click(function(){
		window.open("http://cn.linkedin.com/in/Yoosan/");
	});
	$('section > div >div > div >#blog').click(function(){
		window.open("http://blog.yoosan.me");
	});
	$('section > div >div > div >#mathant').click(function(){
		window.open("http://www.mathant.com");
	});
	$('section > div >div > div >#entertainment').click(function(){
		window.open("entertainment.html");
	});
	/*$('header > nav > ul > li > a').click(
		function(){
			$('header > nav > ul >li > ul').css('display','block');},
		function(){
			$('header > nav > ul >li > ul').css('display','none');
	});*/
	$('header > nav > ul > li > a').hover(
		function(){
			$('header > nav > ul >li > ul').css('display','block');},
		function(){
			$('header > nav > ul >li > ul').css('display','block');
	});
});
