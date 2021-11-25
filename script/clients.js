// Video Swiper
var mySwiper = new Swiper(".swiper-container-videos", {
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 15,
  centeredSlides: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-custom-next",
    prevEl: ".swiper-custom-prev"
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  }
});

/* change active class when click */
$(".swiper-container-videos .swiper-wrapper .swiper-slide a").click(function() {
  $(this).closest(".swiper-slide").addClass("selected").siblings().removeClass("selected");
  mySwiper.slideTo(mySwiper.clickedIndex);
});

$(".swiper-container-videos .swiper-slide").first().addClass("selected");


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
