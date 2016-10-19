$(document).ready(function() {
	$('section > div >div > div >#info').click(function(){
		window.open("info.html");
	});
	$('section > div >div > div >#github').click(function(){
		window.open("https://www.github.com/yoosan");
	});
	$('section > div >div > div >#linkedin').click(function(){
		window.open("http://www.linkedin.com/in/yzyoosan");
	});
	$('section > div >div > div >#blog').click(function(){
		window.open("http://blog.yoosan.me");
	});
	$('section > div >div > div >#resume').click(function(){
		window.open("static/cv.pdf");
	});
	$('section > div >div > div >#misc').click(function(){
		window.open("misc.html");
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
