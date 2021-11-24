AOS.init();

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 47) {
      $('.navbar').addClass('sticky');
  } else {
      $('.navbar').removeClass('sticky');
  }
});