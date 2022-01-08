if ($(window).width() < 576) {
  $(".customers-text-1").attr("data-aos","fade-up");
  $(".customers-images-1").attr("data-aos","fade-up");
  $(".customers-text-2").attr("data-aos","fade-up");
  $(".customers-images-2").attr("data-aos","fade-up");
}
else {
  $(".customers-text-1").attr("data-aos","fade-right");
  $(".customers-images-1").attr("data-aos","fade-left");
  $(".customers-text-2").attr("data-aos","fade-left");
  $(".customers-images-2").attr("data-aos","fade-right");
}


$('#moreless-button1').click(function() {
  $('#moretext1').slideToggle();
  if ($('#moreless-button1').text() == "Read More") {
    $(this).text("Read Less");
  } else {
    $(this).text("Read More")
  }
  $(".dots1").toggle();
});

$('#moreless-button2').click(function() {
  $('#moretext2').slideToggle();
  if ($('#moreless-button2').text() == "Read More") {
    $(this).text("Read Less");
  } else {
    $(this).text("Read More");
  }
  $(".dots2").toggle();
});

$('#moreless-button3').click(function() {
  $('#moretext3').slideToggle();
  if ($('#moreless-button3').text() == "Read More") {
    $(this).text("Read Less");
  } else {
    $(this).text("Read More");
  }
  $(".dots3").toggle();
});



$('.slick-carousel').slick({
  infinite: true,
  slidesToShow: 3, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  prevArrow:"<button type='button' class='slick-nav pull-left'><i class='far fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-nav pull-right'><i class='far fa-angle-right' aria-hidden='true'></i></button>",
  dots: true,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$('.slick-carousel').slickLightbox({
  itemSelector: '.slick-item a',
  navigateByKeyboard: true,
});

