// AOS
AOS.init();

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 47) {
    $('.navbar').addClass('navbar-fixed');
  } else {
    $('.navbar').removeClass('navbar-fixed');
  }
});

if ("ontouchstart" in document.documentElement)
{
  $('.nav-index').show();
}
else
{
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 2300) {
      $('.nav-index').fadeIn();
    } else {
      $('.nav-index').fadeOut();
    }
  });
}


$(window).on("load",function() {
  $(".loader-wrapper").fadeOut("slow");
  $(".navbar").fadeIn("slow");
});

