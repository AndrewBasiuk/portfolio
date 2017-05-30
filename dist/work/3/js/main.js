

$(document).ready(function(){

	$('.our_team_item').on('click', function(){


		var descript = $(this).find('.worker_description');
		var socMedia = $(this).find('.social_media');

		descript.toggle();
		socMedia.toggle();
		$(this).toggleClass('green_back');
	});



	$('.humburger').on('click', function(){
		$('.header_nav_item').slideToggle();
	});


	$('.portfolio_button').on('click', function(){
		$('.portfolio_nav_item').slideToggle();
	});


});


