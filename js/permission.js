//Паралакс шапка
$(window).scroll(function (){
	var wScroll = $(this).scrollTop();	
	$('header h1').css({
		'transform' : 'translate(0px, '+ wScroll / 2.5 +'px)'
	});		
    //Затемнение фото при скроле
    /*$('.grad-enter').css({
		'box-shadow' : 'inset 0px 0px 1000px 1000px rgba(34, 60, 80, ' + wScroll / 4 / 100 + ')'
	});	*/
});

//Вобор рандомного изображения для шапки или зафиксированного фото, если небольшой экран
function getImage() {
    if(innerWidth > 500){
        const random = Math.floor(Math.random() * 4); //Кол-во фото  
        $('.grad-enter').css({
            'background-image' : 'url(photo/gif/permission-gif/'+ random +'.gif)'
        });	
    }else{
        $('.grad-enter').css({
            'background-image' : 'url(photo/nightcity.jpeg)'
        });
    }
};

//Замедление исполнения
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Подмена формы
window.onload = function() {
    getImage();
    $("#login-button").click(function(event){
        event.preventDefault();    
        $('form').fadeOut(500); //Убираем форму
        sleep(500).then(() => { //Ставим текст
            var element = document.getElementById('id');
            element.style.display = "block";
            sleep(500).then(() => { 
                element.style.opacity = "1"; //Проявляем текст
            });
        });
    });
};