
$(document).ready(function() {
	// search-form animation
	$('.head-header-search').hover(
		function() {

			$('.head-header-search__icon').css('display', 'none');


			$('.head-form').animate(
				{
					width: '350px'
				}, 500);
			$('.head-form__input').animate(
				{
					width: '85%'
				}, 500);
		},

		function() {
			$('.head-form').animate(
				{
					width: '0'
				}, 500,
				function() {
					$('.head-header-search__icon').css('display', 'block');
				});
			$('.head-form__input').animate(
				{
					width: '0'
				}, 500);
		}
	);

	// fixed top menu
	var headNavTop = $('.head__nav').offset().top;

	$(window).scroll(function () {

		if ($(this).scrollTop() > 1 && $(this).scrollTop() <= headNavTop) {
			$('.head-header').css({
				'background': '#000',
				'position': 'fixed',
				'z-index': '99'
			});
			$('.head-header-search').hide();
			$('.head-header-share').hide();
		} else {
			$('.head-header').css({
				'background': 'linear-gradient(#000, transparent)',
				'position': 'absolute'
			});
			$('.head-header-search').show();
			$('.head-header-share').show();
		}

		if ($(this).scrollTop() > headNavTop) {
			$('.head__nav').css({
				'position': 'fixed',
				'top': '0',
				'z-index': '100',
				'padding-left': '0',
				'box-shadow': '0 5px 5px rgba(0,0,0,0.5)'
			});
			$('.head__nav-logo').css({
				'display': 'block'
			});
		} else {
			$('.head__nav').css({
				'position': 'static',
				'z-index': '0',
				'padding-left': '4%',
				'box-shadow': 'none'
			});
			$('.head__nav-logo').css({
				'display': 'none'
			});
		}
	});

	//scale sidebar image
	$('.sidebar-news__item').hover(
		function() {
			$(this).find('.sidebar-news-img-block__image').css('transform', 'scale(1.2)');
		},

		function() {
			$(this).find('.sidebar-news-img-block__image').css('transform', 'none');
		}
	);
	if($(window).width() > 1100 && $(window).width() < 1300) {
		$('.sidebar-news__item:nth-child(n+14)').css('display', 'none');
	}

	// tab for news-sort
	$('.news-sort__item').on('click', function(e) {
		event.preventDefault();

		$(this).addClass('news-sort__item_active')
			   .siblings()
			   .removeClass('news-sort__item_active');
	});



	// var navMenuheihgt = $('.nav__item').last();
	// 	console.log(navMenuheihgt);
	// $('.nav-full').css('width', navMenuheihgt + 'px');
	


	// SLICK-slider
	$('.head-slider').slick({
	   autoplay: true,
	   autoplaySpeed: 4000,
	   prevArrow: '.prev-but',
	   nextArrow: '.next-but',
	   dots: true
	});


});
