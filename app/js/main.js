

$(document).ready(function() {

});

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

// paralax
window.addEventListener("scroll", function() {
    document.querySelector(".head__content_center").style.top = 50 + window.pageYOffset/12 + '%';
});
// end__paralax


// animation_on_scroll
var animationArr = ["fade", "slide-left", "bounce"];

function animationOnScroll(animationList) { 
    var elements = document.querySelectorAll(".animation-wrapper-js");
    var arrElement = [];
    var arrDescendants = [];

    elements.forEach(function(item, i) {
        arrElement.push(elements[i]);
    });

    arrElement.forEach(function(item, i) {
        var colDescendants = arrElement[i].getElementsByTagName('*');

        for(var i = 0; i < colDescendants.length; i++) {
            if(colDescendants[i].classList.contains("animated-block-js")) {
                arrDescendants.push(colDescendants[i]);
            }
        }
    });

    var arrTop = arrElement.map(function(item) {
        return item.getBoundingClientRect().top;
    });

    window.addEventListener("scroll", function() {
        var windowScroll = window.pageYOffset;

        for(var i = 0; i < arrElement.length; i++ ) {
            var difference = arrTop[i] - windowScroll;

            if(difference < 600) {
                for (var j = 0; j < animationList.length; j++) {
                    arrDescendants.forEach(function(item, i) {
                        if(item.classList.contains(animationList[j])) {
                            item.classList.add(animationList[j] + "-in");
                        }
                    });
                }
            }
        }
    });

    // window.onscroll = function() {
    //     var windowScroll = window.pageYOffset;

    //     for(var i = 0; i < arrElement.length; i++ ) {
    //         var difference = arrTop[i] - windowScroll;

    //         if(difference < 600) {
    //             for (var j = 0; j < animationList.length; j++) {
    //                 arrDescendants.forEach(function(item, i) {
    //                     if(item.classList.contains(animationList[j])) {
    //                         item.classList.add(animationList[j] + "-in");
    //                     }
    //                 });
    //             }
    //         }
    //     }
    // }
}

animationOnScroll(animationArr); 
// end__animation_on_scroll

var currentYear = new Date().getFullYear();
    document.querySelector('.age').innerHTML = currentYear - 1994;