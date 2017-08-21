$(document).ready(function() {

	var screenWidth = $(window).width();
	
	$('.work__wrap').hover(
		function() {
			var iconLink = $(this).find('.icon-link'); 
			iconLink.css('display', 'block');
		},
		function() {
			$('.icon-link').css('display', 'none');
		}
	);

	$(window).scroll(function(){

        var bo = $("body").scrollTop();

        if ( bo > 400 ) { 
           $(".to-top").css("display", "block"); 
        } else { 
           $(".to-top").css("display", "none"); 
    	};
    });

    // 

    $('.popup__btn').on('click', function() {
    	$('.popup__text').fadeToggle(700);
    	$(this).removeClass('swing');
    });

    $('.my-work__btn').on('click', function(){
    	if(screenWidth<768) {
			$('.work__item:nth-child(n+7)').fadeToggle(500);
		} else {
			$('.work__item:nth-child(n+7)').fadeToggle(500);
		}
    });


// плавная прокрутка
	$('a[href^="#"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
     $('body').animate( { scrollTop: destination }, 1000 );
    });

});