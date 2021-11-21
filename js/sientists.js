//Паралакс шапка
$(window).scroll(function (){
	var wScroll = $(this).scrollTop();
	if(innerWidth > 410){	
		$('header h1').css({
			'transform' : 'translate(0px, '+ wScroll / 2.5 +'px)'
		});		
	}else{
		$('header h1').css({
			'transform' : 'translate(0px, '+ wScroll / 3.9 +'px)'
		});
	}
});

//Боковое меню (открытие)
var k = 0; //Последовательное появление при первом старте
$(document).on('click','.js-menu-toggle.closed',function(e){
	e.preventDefault();
	$(this).removeClass('closed').addClass('opened');
	$('.menu').css({ 'left':'0px' });
	var count = $('.menu-item').length;
	$('.menu-load').slideDown( (count*.6)*100 );
	$('.menu-item').each(function(i){
		var thisLI = $(this);
		if(k == 0){
			timeOut = 100*i;
		}else{
			timeOut = 150;
		}
		setTimeout(function(){
			thisLI.css({
				'opacity':'1',
				'margin-left':'0'
			});
		},timeOut);
	});
	k = 1;
});

//Боковое меню (закрытие)
$(document).on('click','.js-menu-toggle.opened',function(e){
	e.preventDefault(); 
	$(this).removeClass('opened').addClass('closed');

	$('.menu').css({ 'left':'-250px' });

	$('.menu-item').css({
		'opacity':'0',
		'margin-left':'-20px'
	});
});