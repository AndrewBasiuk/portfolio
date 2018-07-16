
//fixed_menu
window.addEventListener("scroll", function() {
    if(window.pageYOffset > 0) {
        document.querySelector(".header").classList.add('header_scroll');
    } else {
        document.querySelector(".header").classList.remove('header_scroll');
    }
});
// end__fixed_menu

// active nav item
function activeNavItem() {
    var navLink = document.querySelectorAll(".nav-list__link");

    window.addEventListener("scroll", function() {
        var allSection = document.querySelectorAll("section");

        for(var i = 1; i < allSection.length; i++) {
            var elementTop = allSection[i].getBoundingClientRect().top;
            var elementHeight = allSection[i].clientHeight;
             if(elementTop < 100 && elementTop > -elementHeight+elementHeight/4) {
                navLink[i-1].classList.add("nav-list__link_active");
             } else {
                navLink[i-1].classList.remove("nav-list__link_active");
             }
        }
    });
};
activeNavItem();
// end__active nav item

// paralax
window.addEventListener("scroll", function() {
    // document.querySelector(".skill-info_additional").style.top = 50 + window.pageYOffset/12 + '%';
    document.querySelector(".head__content_center").style.top = 50 + window.pageYOffset/12 + '%';
});
// end__paralax


// animation_on_scroll
var animationArr = ["height", "fade", "slide-left", 
                    "slide-right",  "slide-top", "slide-bottom",
                    "border-draw_black", "border-draw_white"];

function animationOnScroll(animationList) { 
    var elements = document.querySelectorAll(".animation-wrapper-js");
    var arrElement = [];
    var arrDescendants = [];

    elements.forEach(function(item, i) {
        arrElement.push(elements[i]);
    });


    window.addEventListener("scroll", function() {
        arrElement.forEach(function(item, i) {
            if(item.getBoundingClientRect().top < 500) {

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

// var currentYear = new Date().getFullYear();
//     document.querySelector('.age').innerHTML = currentYear - 1994;




// ////////////////////// JQuery ////////////////////

// slow scroll
$(document).ready(function() {
    $(".nav-list__link").on("click", function(e) {
        e.preventDefault();
        var elementIndex = $(".nav-list__link").index(this);

        var section = $("section");

        for(var i = 1; i < section.length; i++) {
            var scrollValue = $(section[i]).offset().top;
            if(elementIndex == i-1) {
                $('body,html').animate({scrollTop: scrollValue}, 800);
            }
        }
    });

    $(".logo__link").on("click", function(e) {
        e.preventDefault();
        var wrap = $("section")[0];
        var scrollValue = $(wrap).offset().top - 150;
        $('body,html').animate({scrollTop: scrollValue}, 800);
    });

    $(".head__button").on("click", function(e) {
        e.preventDefault();
        var wrap = $("section")[1];
        var scrollValue = $(wrap).offset().top;
        $('body,html').animate({scrollTop: scrollValue}, 800);
    });
});

// end__slow scroll

// // ajax
// $(function() {
//     var form = $('#contact');
//     var formMessages = $('.message');

//     $(form).submit(function(event) {
//         event.preventDefault();
//         // var formData = $(form).serialize();
//         // $.ajax({
//         //     type: 'POST',
//         //     url: $(form).attr('action'),
//         //     data: formData
//         // }),
//         .done(function(response) {
//             $(formMessages).removeClass('message__error');
//             $(formMessages).addClass('message__success');

//             // Clear the form.
//             $('#name').val('');
//             $('#email').val('');
//             $('#message').val('');
//         }),
//         .fail(function(data) {
//             $(formMessages).removeClass('message__success');
//             $(formMessages).addClass('message__error');
//         });
//     });
// });
// end__ajax

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
        }, 6000);
    }).fail(function(data) {
        $(".error").addClass("error-in");
        setTimeout(function() {
            $(".error").removeClass("error-in");
        }, 6000);
    });
});
// ////////////////////// END__JQuery ////////////////////

