$(document).ready(function() {

	var screenWidth = $(window).width();


	//BUTTONs
	$("button.portfolio__button").mousedown(function() {
		$(this).toggleClass('portfolio__button_click');
	});
	$("button.portfolio__button").on('click', function(){
		if(screenWidth<768) {
			$('.work__item:nth-child(n+4)').fadeToggle(500);
		} else {
			$('.work__item:nth-child(n+9)').fadeToggle(500);
		}

	});
	$("button.work__button").mousedown(function() {
		$(this).toggleClass('work__button_click');
	});
	$("button.stage__button").mousedown(function() {
		$(this).toggleClass('stage__button_click');
	});
	$("button.form__but").mousedown(function() {
		$(this).toggleClass('form__button_click');
	});

	$(".hamburger").click(function() {
		$(this).toggleClass('is-active');
		$(".banner__hamburger").toggleClass('popup-banner__hamburger');
		$(".main-banner__hamburger").toggleClass('main-popup-banner__hamburger');
		$(".popup").toggleClass('vizible');
	});
	//BUTTONs


	$('.client-logo-slider__item').hover(
		function() {
			$(this).find('.client-logo-slider__image').css('display', 'none');
			$(this).find('.client-logo-slider__image_color').css('display', 'block');
		},
		function() {
			$(this).find('.client-logo-slider__image').css('display', 'block');
			$(this).find('.client-logo-slider__image_color').css('display', 'none');
		}
	);


	//SERVICES
	var yellowButton = $('.added-block__button_yellow');
	var grayButton = $('.added-block__button_gray');
	var addedItem = $('.added-list__item');


	$('.services-list__button').on('click', function(){
		var serviceItem = $(this).closest('.services-list__item'),
			serviceAdd = $(this).prev('.services-list__add'),
			serviceIndex = serviceItem.index();

		addedItem.eq(serviceIndex).addClass('added-list__item_active');
		serviceItem.addClass('services-list__item-action');
		serviceAdd.attr("src","img/services-icon/close-button.png");

		if (addedItem.hasClass('added-list__item_active')) {
			yellowButton.css('display', 'block');
			grayButton.css('display', 'none');
		} else {
			grayButton.css('display', 'block');
			yellowButton.css('display', 'none');
		}
	});
	

	$('.services-list__add').on('click', function(){
		var serviceItem = $(this).closest('.services-list__item'),
			serviceIndex = serviceItem.index();

		addedItem.eq(serviceIndex).removeClass('added-list__item_active');
		serviceItem.removeClass('services-list__item-action');
		$(this).attr("src","img/services-icon/add-button.png");

		if (addedItem.hasClass('added-list__item_active')) {
			yellowButton.css('display', 'block');
			grayButton.css('display', 'none');
		} else {
			grayButton.css('display', 'block');
			yellowButton.css('display', 'none');
		}
	});

	$('.added-list__remove').on('click', function(){
		var serviceItem = $('.services-list__item'),
			addedItem = $(this).closest('.added-list__item'),
			addedIndex = addedItem.index();

		addedItem.removeClass('added-list__item_active');
		serviceItem.eq(addedIndex).removeClass('services-list__item-action');
		serviceItem.eq(addedIndex).find('.services-list__add').attr("src","img/services-icon/add-button.png");

		if ($('.added-list__item').hasClass('added-list__item_active')) {
			yellowButton.css('display', 'block');
			grayButton.css('display', 'none');
		} else {
			grayButton.css('display', 'block');
			yellowButton.css('display', 'none');
		}
	});

	yellowButton.on('click', function(){
		$(this).css('color', '#000');
		$('.smile').css('display', 'block');
	});
	//SERVICES

	// POPUP
	$('.popup-main__heading').on('click', function() {
		var popupList = $(this).siblings('.popup-list');
		var popupContactList = $(this).siblings('.popup-contact-list');
		popupList.find('.popup-list__item').toggleClass('vizible');
		popupContactList.find('.popup-contact-list__item').toggleClass('vizible');
	});


	// POPUP






	// SLICK.JS

	$('.slick-slider').find('.slick-current').removeAttr('style');

	$('.stage-slider').slick({
		   autoplay: true,
		   autoplaySpeed: 1500,
		   prevArrow: '.stage-slider__button-prev',
		   nextArrow: '.stage-slider__button-next',
		   slidesToShow: 3,
		   centerPadding: '0',
		   centerMode: true,
		   dots: false

	});
	$('.stage-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	  	
	  	var centerSlide = $('[data-slick-index="'+nextSlide+'"]'),
	  		otherSlide = $('[data-slick-index="'+currentSlide+'"]');

	  	centerSlide.find('.stage-slider__num').addClass('stage-slider__num_big');
	  	centerSlide.find('.stage-slider__image').fadeIn(500);
	  	centerSlide.find('.stage-slider__figcaption').css('display', 'block');

	  	otherSlide.find('.stage-slider__num').removeClass('stage-slider__num_big');
		otherSlide.find('.stage-slider__image').css('display', 'none');
		otherSlide.find('.stage-slider__figcaption').css('display', 'none');

		$('.stage-descript__item').eq(nextSlide).fadeIn(500);
		$('.stage-descript__item').eq(currentSlide).css('display', 'none');
		
	});



	$('.project1-slider-for').slick({
	   prevArrow: '.project1-slider__button-prev',
	   nextArrow: '.project1-slider__button-next',
	   asNavFor: '.project1-slider-nav'
	});
	$('.project1-slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.project1-slider-for',
	  // centerMode: true,
	  focusOnSelect: true,
	});

	$('.project2-slider-for').slick({
	   prevArrow: '.project2-slider__button-prev',
	   nextArrow: '.project2-slider__button-next',
	   asNavFor: '.project2-slider-nav'
	});
	$('.project2-slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.project2-slider-for',
	  focusOnSelect: true,
	});

	$('.project3-slider-for').slick({
	   prevArrow: '.project3-slider__button-prev',
	   nextArrow: '.project3-slider__button-next',
	   asNavFor: '.project3-slider-nav'
	});
	$('.project3-slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.project3-slider-for',
	  // centerMode: true,
	  focusOnSelect: true,
	});


	$('.client-slider').slick({
		   autoplay: true,
		   autoplaySpeed: 5000,
		   prevArrow: '.client-slider__button-prev',
		   nextArrow: '.client-slider__button-next',
		   dots: false

	});

	if(screenWidth < 500) {
		$('.client-logo-slider').slick({
		   autoplay: true,
		   autoplaySpeed: 500,
		   slidesToShow: 3,
	  	   slidesToScroll: 1,
		   arrows: false,
		   dots: false
		});
	} else if(screenWidth < 768) {
		$('.client-logo-slider').slick({
		   autoplay: true,
		   autoplaySpeed: 500,
		   slidesToShow: 6,
	  	   slidesToScroll: 1,
		   arrows: false,
		   dots: false
		});
	} else {
		$('.client-logo-slider').slick({
		   autoplay: true,
		   autoplaySpeed: 500,
		   slidesToShow: 8,
	  	   slidesToScroll: 1,
		   arrows: false,
		   dots: false
		});
	}

	$('.main-portfolio-slider_1').slick({
		   autoplay: false,
		   autoplaySpeed: 1000,
		   prevArrow: '.main-portfolio-slider_1__button-prev',
		   nextArrow: '.main-portfolio-slider_1__button-next',
		   slidesToShow: 3,
		   slidesToScroll: 1,
		   centerPadding: '0',
		   centerMode: true,
		   dots: false

	});
	// var a = $('.portfolio-slider_1').find('.current-slide').find('.portfolio-slider_1__image').css('filter', 'blur(10px)');
	// console.log(a);
	$('.main-portfolio-slider_1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	  	
	  	var centerSlide = $('[data-slick-index="'+nextSlide+'"]'),
	  		otherSlide = $('[data-slick-index="'+currentSlide+'"]');

	  	centerSlide.find('.main-portfolio-slider_1__image').css('filter', 'none');
	  	otherSlide.find('.main-portfolio-slider_1__image').css('filter', 'blur(10px)');

	});

	$('.main-portfolio-slider_2').slick({
		autoplay: false,
		autoplaySpeed: 1000,
		prevArrow: '.main-portfolio-slider_2__button-prev',
		nextArrow: '.main-portfolio-slider_2__button-next',
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: '-200px',
		centerMode: true,
		dots: false

	});
	$('.main-portfolio-slider_2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  	
		var centerSlide = $('[data-slick-index="'+nextSlide+'"]'),
			otherSlide = $('[data-slick-index="'+currentSlide+'"]');

		centerSlide.find('.main-portfolio-slider_2__image').css('filter', 'none');
		otherSlide.find('.main-portfolio-slider_2__image').css('filter', 'blur(5px)');
		});
	// SLICK.JS

});

// GOOGLE MAP
function initMap() {
    var center = {lat: 50.49999902948224, lng: 30.52295136573327};
	var screenWidth = $(window).width();
 
    if(screenWidth > 767 && screenWidth <= 1100) {

    	var center = {lat: 50.500367, lng: 30.522493};
    	var map = new google.maps.Map(document.getElementById('map'), {
	        zoom: 16,
	        scrollwheel: false,
	        disableDoubleClickZoom: true,
	        center: center,
	    	styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#333333"},{"weight":"1.00"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#fafafa"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#b11818"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#e6e6e6"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#e6e6e6"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#93b1ff"}]}]
    	});

    	var icon = {
	        url: "img/map-marker.png", // url
	        size: new google.maps.Size(210, 140),
	        scaledSize: new google.maps.Size(210, 140), // scaled size
	        origin: new google.maps.Point(0, 0) // origin
    	};

    } else if(screenWidth > 500 && screenWidth < 767) {

    	var center = {lat: 50.499947, lng: 30.521090};
    	var map = new google.maps.Map(document.getElementById('map'), {
	        zoom: 16,
	        scrollwheel: false,
	        disableDoubleClickZoom: true,
	        center: center,
	    	styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#333333"},{"weight":"1.00"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#fafafa"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#b11818"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#e6e6e6"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#e6e6e6"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#93b1ff"}]}]
    	});

    	var icon = {
	        url: "img/map-marker.png", // url
	        size: new google.maps.Size(210, 140),
	        scaledSize: new google.maps.Size(210, 140), // scaled size
	        origin: new google.maps.Point(0, 0) // origin
    	};

    } else if(screenWidth <= 500) {

    	var center = {lat: 50.499293, lng:  30.520663};
    	var map = new google.maps.Map(document.getElementById('map'), {
	        zoom: 15,
	        scrollwheel: false,
	        disableDoubleClickZoom: true,
	        center: center,
	    	styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#333333"},{"weight":"1.00"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#fafafa"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#b11818"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#e6e6e6"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#e6e6e6"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#93b1ff"}]}]
    	});

    	var icon = {
	        url: "img/map-marker.png", // url
	        size: new google.maps.Size(110, 80),
	        scaledSize: new google.maps.Size(110, 80), // scaled size
	        origin: new google.maps.Point(0, 0) // origin
    	};

    } else {

    	var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        center: center,
    	styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#333333"},{"weight":"1.00"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#fafafa"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#b11818"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#e6e6e6"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#e6e6e6"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#93b1ff"}]}]
    	});

    	var icon = {
        url: "img/map-marker.png", // url
        size: new google.maps.Size(295, 210),
        scaledSize: new google.maps.Size(295, 210), // scaled size
        origin: new google.maps.Point(0, 0), // origin
    	};

    }

    var marker = new google.maps.Marker({
        position: {lat: 50.499416, lng: 30.517335},
        map: map,
        icon: icon
    });
}


