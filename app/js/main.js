$(document).ready(function() {

	var screenWidth = $(window).width();

	$(window).scroll(function(){

        var bo = $("body").scrollTop();

        if ( bo > 400 ) { 
           $(".to-top").css("display", "block"); 
        } else { 
           $(".to-top").css("display", "none"); 
    	};
    });

    // плавная прокрутка
	$('a[href^="#"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
     $('body').animate( { scrollTop: destination }, 1000 );
    });


    // 
    $('.popup__btn').on('click', function() {
    	$('.popup__text').fadeToggle(700);
    	$(this).removeClass('swing');
    });

    $('.my-work__btn').on('click', function(){
    	if(screenWidth<768) {
			$('.work__item:nth-child(n+4)').fadeToggle(500);
		} else {
			$('.work__item:nth-child(n+7)').fadeToggle(500);
		}

		$(this).toggleClass('my-work__btn_active');
    });

    $('.contact-icon__item').hover(
		function() {
			$(this).addClass('jello');
		},
		function() {
			$(this).removeClass('jello');
		}
	);


});