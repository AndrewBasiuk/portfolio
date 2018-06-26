

// $(document).ready(function() {

// });

//fixed_menu
window.addEventListener("scroll", function() {
    if(window.pageYOffset > 0) {
        document.querySelector(".header").classList.add('header_scroll');
        document.querySelector(".header__logo").classList.add('header__logo_scroll');
        document.querySelector(".logo__circle").classList.add('logo__circle_scroll');
    } else {
        document.querySelector(".header").classList.remove('header_scroll');
        document.querySelector(".header__logo").classList.remove('header__logo_scroll');
        document.querySelector(".logo__circle").classList.remove('logo__circle_scroll');
    }
});
// end__fixed_menu

//slow anchor
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1500,
    easing: 'easeInOutCubic'
});
//end__slow anchor

// active nav item
// function activeNavItem(section) {
//     window.addEventListener("scroll", function() {
//         var element = document.querySelector(section),
//             elementTop = element.getBoundingClientRect().top;
//         var navItem = document.querySelectorAll(".nav-list__item");

//         if(elementTop < 100) {
//             // console.log(navItem);
//             if(element == )
//         }

//     });
// };

// activeNavItem("#about");
// end__active nav item

// paralax
window.addEventListener("scroll", function() {
    // document.querySelector(".skill-info_additional").style.top = 50 + window.pageYOffset/12 + '%';
    document.querySelector(".head__content_center").style.top = 50 + window.pageYOffset/12 + '%';
});
// end__paralax


// animation_on_scroll
var animationArr = ["height", "fade", "slide-left", "slide-right",  "slide-top", "slide-bottom", "border-draw_black", "border-draw_white"];

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

var currentYear = new Date().getFullYear();
    document.querySelector('.age').innerHTML = currentYear - 1994;