$(document).ready(function() {

    // menu show and hide
    var menuContainer = $(".nav-container");
    $(".nav-container__icon").on("click", function() {
        menuContainer.removeClass("menu-show");
    });
    $(".nav-button").on("click", function() {
        menuContainer.addClass("menu-show");
    });
    //end menu show and hide

    var currentYear = new Date().getFullYear();
    document.querySelector('.age').innerHTML = currentYear - 1994;




    // function animationScroll(obj) {
    //     for(var key in obj) { 
    //         var elements = document.querySelectorAll("." + key);
    //         var arr = [];

    //         for(var i = 0; i < elements.length; i++) {
    //             arr.push(elements[i]);
    //         }

    //         var arrTop = arr.map(function(item) {
    //            return item.getBoundingClientRect().top;
    //         });

    //         window.onscroll = function() {
    //             var windowScroll = window.pageYOffset;

    //             for(var j = 0; j < arr.length; j++ ) {
    //                 var difference = arrTop[j] - windowScroll;

    //                 if(difference < 500) {
    //                     arr[j].classList.add(obj[key]);
    //                 }
    //             }
    //         }
    //     }
    // }


    function animationOnScroll(el) { 
            var elements = document.querySelectorAll(el);
            var arrElement = [];

            for(var i = 0; i < elements.length; i++) {
                arrElement.push(elements[i]);
            }

            var arrTop = arrElement.map(function(item) {
               return item.getBoundingClientRect().top;
            });

            window.onscroll = function() {
                var windowScroll = window.pageYOffset;

                for(var j = 0; j < arrElement.length; j++ ) {
                    var difference = arrTop[j] - windowScroll;

                    if(difference < 500) {
                        if(arrElement[j].classList.contains("fade")) {
                            arrElement[j].classList.add("fade-in");
                        } else if(arrElement[j].classList.contains("slide-right-down")) {
                            arrElement[j].classList.add("slide-right-down-in");
                        } else if(arrElement[j].classList.contains("slide-right")) {
                            arrElement[j].classList.add("slide-right-in");
                        } else if(arrElement[j].classList.contains("slide-left")) {
                            arrElement[j].classList.add("slide-left-in");
                        } else if(arrElement[j].classList.contains("slide-top")) {
                            arrElement[j].classList.add("slide-top-in");
                        } else if(arrElement[j].classList.contains("slide-bottom")) {
                            arrElement[j].classList.add("slide-bottom-in");
                        } 
                    }
                }
            }
    }

    animationOnScroll(".animation"); 





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
    });

    $('.contact-icon__item').hover(
		function() {
			$(this).addClass('jello');
		},
		function() {
			$(this).removeClass('jello');
		}
	);

    $(window).load(function() {
        setTimeout(function() {
          $preloader = $('#preloader-wrap'),
        $loader = $preloader.find('.preloader');
        $loader.fadeOut();
        $preloader.delay(100).fadeOut('slow').remove();
        $('.out').removeClass('out');
        }, 1000);
    });


});
