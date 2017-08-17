$(document).ready(function() {
	
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
    var menuItem  = $('.menu__item');

    for (var i = 0; i <= menuItem.length; i++) {
    	var itemWidth = menuItem.width()-menuItem.width()*0.1*i;
    	menuItem[i].css('width', itemWidth+'px');

    }




// плавная прокрутка
	$('a[href^="#"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
     $('body').animate( { scrollTop: destination }, 1000 );
    });

});