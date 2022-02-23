// Brand Carousel 
$(document).ready(function() {
  $('.brand-carousel').owlCarousel({
    loop:true,
    center:true,
    margin:60,
    autoWidth:true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    fluidSpeed: true,
    autoplaySpeed: 1000
  })
})

$(window).on('scroll', function() {
  if ($(window).scrollTop() > 100) {
    $('.particles').css({
      position: 'fixed',
      top: '100px'
    });
  } else {
    $('.particles').css({
      position: 'absolute',
      top: '200px'
    });
  }
  if ($(window).scrollTop() > $('.stationery').innerHeight() - $('.logo-section').innerHeight() - 220) {
    $('.particles').css({
      position: 'absolute',
      top: $('.stationery').innerHeight()- $('.logo-section').innerHeight() - 120
    });
  }
})