$(document).ready(function() {

	$('.icon-menu').on('click', function() {
		$('.nav').slideToggle();
	});

	// $('.slider').slick({
	//    autoplay: true,
	//    autoplaySpeed: 3000,
	//    prevArrow: '.prev-but',
	//    nextArrow: '.next-but',
	//    dots: false

	//   });

});

$('.slider').slick({
	   autoplay: true,
	   autoplaySpeed: 3000,
	   prevArrow: '.prev-but',
	   nextArrow: '.next-but',
	   dots: false

	  });