$(document).ready(function(){


	$('.humburger').on('click', function(){
		$('.nav__item').slideToggle();
	});

	$('a[href^="#"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
     $('body').animate( { scrollTop: destination }, 600 );
    });

	$(window).scroll(function() {
	    $('.mov').each(function(){
	      var imagePos = $(this).offset().top;
	      var topOfWindow = $(window).scrollTop();
	      if (imagePos < topOfWindow+600) {
	        $(this).addClass('zoomIn');
	      }
	    });
	  });

});

