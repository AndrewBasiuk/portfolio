let header = document.querySelector(".header"),
    logo = document.querySelector(".logo__svg"),
    burgerMenu = document.querySelector(".burger-menu"),
    nav = document.querySelector(".nav");

// fixed header
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    header.classList.add('header_scroll');
    logo.classList.add('logo__svg_scroll');
    burgerMenu.classList.add('burger-menu_scroll');
  } else {
    header.classList.remove('header_scroll');
    logo.classList.remove('logo__svg_scroll');
    burgerMenu.classList.remove('burger-menu_scroll');
  }
});
// end__fixed header

// burger-menu
$(".burger-menu").click(function () {
  $(this).toggleClass('burger-menu_close');
  $(nav).toggleClass('nav_mob');
});
// burgerMenu.addEventListener("click", function(e){
//   let el = e.target;
//   el.classList.toggle('burger-menu_close');
//   document.querySelector(".nav").classList.toggle('nav_mob');
// });
// end__burger-menu


// smooth scroll
// for one link
$(".get-started").on("click", function (e) {
  e.preventDefault();
  var wrap = $(".start");
  var scrollValue = wrap.offset().top - 150;
  $('body,html').animate({ scrollTop: scrollValue }, 800);
});


// for many links
$(".nav-list__link").on("click", function (e) {
  // e.preventDefault();
  var elementIndex = $(".nav-list__link").index(this);

  var section = $(".anchor");

  for (var i = 1; i < section.length; i++) {
    var scrollValue = $(section[i]).offset().top;
    if (elementIndex == i - 1) {
      $('body,html').animate({ scrollTop: scrollValue }, 800);
    }
  }
});
// end__smooth scroll

