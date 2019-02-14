
// active nav item
// function activeNavItem() {
//     var navLink = document.querySelectorAll(".nav-list__link");

//     window.addEventListener("scroll", function() {
//         var sections = document.querySelectorAll("section");

//         for(var i = 1; i < sections.length; i++) {
//             var elementTop = sections[i].getBoundingClientRect().top;
//             var elementHeight = sections[i].clientHeight;
//              if(elementTop < 100 && elementTop > -elementHeight+elementHeight/4) {
//                 navLink[i-1].classList.add("nav-list__link_active");
//              } else {
//                 navLink[i-1].classList.remove("nav-list__link_active");
//              }
//         }
//     });
// };
// activeNavItem();
// end__active nav item

// paralax
window.addEventListener("scroll", function() {
    document.querySelector(".head__content_center").style.top = 50 + window.pageYOffset/12 + '%';
});
// end__paralax



// ////////////////////// JQuery ////////////////////

$(document).ready(function() {
    // slow scroll
    function slowScrollHandler(sectionNum) {
        var wrap = $("section")[sectionNum];
        var scrollValue = $(wrap).offset().top;
        $('body,html').animate({scrollTop: scrollValue}, 800);
    };

    $(".head__button-js").on("click", function(e) {
        e.preventDefault();
        slowScrollHandler(1);
    });
    $(".nav-list__item").on("click", function(e) {
        e.preventDefault();
        var index = $(".nav-list__item").index(this);
        slowScrollHandler(index+1);
    });
    // end__slow scroll


    // // ajax
    // $("#main-form").submit(function(e){
    //     e.preventDefault(); //prevent default action 
    //     var post_url = $(this).attr("action"); //get form action url
    //     var request_method = $(this).attr("method"); //get form GET/POST method
    //     var form_data = $(this).serialize(); //Encode form elements for submission
        
    //     $.ajax({
    //         url : post_url,
    //         type: request_method,
    //         data : form_data
    //     }).done(function(response){ //
    //        $(".success").addClass("success-in");
    //         setTimeout(function() {
    //             $(".success").removeClass("success-in");
    //         }, 3000);
    //     }).fail(function(data) {
    //         $(".error").addClass("error-in");
    //         setTimeout(function() {
    //             $(".error").removeClass("error-in");
    //         }, 3000);
    //     });
    // });
    // // end__ajax
});

// // preloader
// window.addEventListener("load", function() {
//    setTimeout(function() {
//       document.querySelector(".preloader").classList.add("out");
//     }, 1000);
// });
// // end__preloader
// ////////////////////// END__JQuery ////////////////////

