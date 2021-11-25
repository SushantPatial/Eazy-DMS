// AOS
AOS.init();

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 47) {
    $('.navbar').addClass('sticky');
  } else {
    $('.navbar').removeClass('sticky');
  }
});

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 2300) {
    $('.nav').fadeIn();
  } else {
    $('.nav').fadeOut();
  }
});