//fixed_menu
window.addEventListener("scroll", function() {
    if(window.pageYOffset > 0) {
        document.querySelector(".header").classList.add('header_scroll');
        document.querySelector(".header").classList.add('product__header_scroll');
    } else {
        document.querySelector(".header").classList.remove('header_scroll');
        document.querySelector(".header").classList.remove('product__header_scroll');
    }
});
//end__fixed_menu

// animation_on_scroll
var animationArr = ["height", "fade", "slide-left", 
                    "slide-right",  "slide-top", "slide-bottom",
                    "border-draw_black", "border-draw_white", "zoom"];

function animationOnScroll(animationList) { 
    var elements = document.querySelectorAll(".animation-wrapper-js");
    var arrElement = [];
    var arrDescendants = [];

    elements.forEach(function(item, i) {
        arrElement.push(elements[i]);
    });

    window.addEventListener("scroll", function() {
        arrElement.forEach(function(item, i) {
            if(item.getBoundingClientRect().top < 500 && item.getBoundingClientRect().top > 150) {

                var colDescendants = item.getElementsByTagName('*');

                for(var k = 0; k < colDescendants.length; k++) {
                    if(colDescendants[k].classList.contains("animated-block-js")) {
                        arrDescendants.push(colDescendants[k]);
                    }
                }

                //add class for animation
                for (var j = 0; j < animationList.length; j++) {
                    arrDescendants.forEach(function(item, i) {
                        if(item.classList.contains(animationList[j])) {
                            item.classList.add(animationList[j] + "-in");
                        }
                    });
                }
            }
        });
    });
}

animationOnScroll(animationArr); 
// end__animation_on_scroll

// form-popup
$(".product-button__button").on("click", function(e) {
    e.preventDefault();
    $(".form-popup").fadeIn();
});
$(".form-popup__cancel").on("click", function(e) {
    e.preventDefault();
    $(".form-popup").fadeOut();
});
// end__form-popup


$(document).ready(function() {
    // ajax
    $("#main-form").submit(function(e){
        e.preventDefault(); //prevent default action 
        var post_url = $(this).attr("action"); //get form action url
        var request_method = $(this).attr("method"); //get form GET/POST method
        var form_data = $(this).serialize(); //Encode form elements for submission
        
        $.ajax({
            url : post_url,
            type: request_method,
            data : form_data
        }).done(function(response){ //
           $(".success").addClass("success-in");
            setTimeout(function() {
                $(".success").removeClass("success-in");
            }, 3000);
        }).fail(function(data) {
            $(".error").addClass("error-in");
            setTimeout(function() {
                $(".error").removeClass("error-in");
            }, 3000);
        });
    });
    // end__ajax
});

// slider
(function slider() {
    $(".module-slider-list").each(function(i, item) {
        var itemLength = $(item).find(".module-slider-list__item").length;
        if(itemLength > 1) {
            $(item).slick({
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1500,
                autoplay: 100,
                arrows: false,
                dots: true
                // prevArrow: '.workers-slider-nav__prev',
                // nextArrow: '.workers-slider-nav__next',
              });
        }
    });
}());
// end__slider

