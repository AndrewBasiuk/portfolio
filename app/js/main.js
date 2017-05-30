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


// плавная прокрутка
	$('a[href^="#"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
     $('body').animate( { scrollTop: destination }, 1000 );
    });

});