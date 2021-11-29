// AOS
AOS.init();

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 47) {
    $('.navbar').addClass('navbar-fixed');
  } else {
    $('.navbar').removeClass('navbar-fixed');
  }
});

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 2300) {
    $('.nav-index').fadeIn();
  } else {
    $('.nav-index').fadeOut();
  }
});