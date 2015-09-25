$(document).ready(function() {
	$('section > div >div > div >#projects').click(function(){
		window.open("projects.html");
	});
	$('section > div >div > div >#github').click(function(){
		window.open("https://www.github.com/yoosan");
	});
	$('section > div >div > div >#linkedin').click(function(){
		window.open("http://cn.linkedin.com/in/yoosan");
	});
	$('section > div >div > div >#blog').click(function(){
		window.open("http://blog.yoosan.me");
	});
	$('section > div >div > div >#mathant').click(function(){
		window.open("static/resume.pdf");
	});
	$('section > div >div > div >#entertainment').click(function(){
		window.open("entertainment.html");
	});
	$('header > nav > ul > li').hover(
		function(){
			$('header > nav > ul >li > ul').css('display', 'block');/*},
		function(){
			$('header > nav > ul >li > ul').slideUp(3000);*/
	});
	$('header > nav > ul >li > ul').hover(function(){},
		function(){
				$('header > nav > ul >li > ul').slideUp(2000);
		}
	);
});
