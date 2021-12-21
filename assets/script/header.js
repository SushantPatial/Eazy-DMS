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


$('.industries').on('click', function() {
  $('.nav-dropdown-content').toggle();
})
$(document).click(function(event) {
  if (!$(event.target).hasClass('industries')) {
    $('.nav-dropdown-content').css('display', 'none');
  }
});
$(document).on('click', function() {
  if ($('.nav-dropdown-content').attr('style') == 'display: block;') {
    $('.fa-caret-down').addClass('flip');
  }
  else {
    $('.fa-caret-down').removeClass('flip');
  }
})
