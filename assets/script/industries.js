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

  // Stopping the fixed position
  let div1 = $(".lower-particle");
  let div2 = $(".particles-bottom");
  let div1_top = div1.offset().top;
  var div2_top = div2.offset().top;
  let div1_bottom = div1_top + div1.height();
  let div2_bottom = div2_top + div2.height();

  if (div1_top >= div2_top) {
    $('.particles').css({
      position: 'absolute',
      top: div2_bottom - $('.particles').height()
    });
  }
})