//Паралакс шапка
$(window).scroll(function (){
	var wScroll = $(this).scrollTop();	
	$('header h1').css({
		'transform' : 'translate(0px, '+ wScroll / 2.5 +'px)'
	});		
});