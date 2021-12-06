
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

$('#moreless-button3').click(function() {
  $('#moretext3').slideToggle();
  if ($('#moreless-button3').text() == "Read More") {
    $(this).text("Read Less");
  } else {
    $(this).text("Read More");
  }
  $(".dots3").toggle();
});



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
