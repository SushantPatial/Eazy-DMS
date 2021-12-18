
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


$('.owl-carousel').owlCarousel({
  mouseDrag: false,
  loop: true,
  margin: 2,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
});
  
$('.owl-prev').click(function() {
  $active = $('.owl-item .item.show');
  $('.owl-item .item.show').removeClass('show');
  $('.owl-item .item').removeClass('next');
  $('.owl-item .item').removeClass('prev');
  $active.addClass('next');
  if($active.is('.first')) {
    $('.owl-item .last').addClass('show');
    $('.first').addClass('next');
    $('.owl-item .last').parent().prev().children('.item').addClass('prev');
  }
  else {
    $active.parent().prev().children('.item').addClass('show');
    if($active.parent().prev().children('.item').is('.first')) {
      $('.owl-item .last').addClass('prev');
    }
    else {
      $('.owl-item .show').parent().prev().children('.item').addClass('prev');
    }
  }
});
  
$('.owl-next').click(function() {
  $active = $('.owl-item .item.show');
  $('.owl-item .item.show').removeClass('show');
  $('.owl-item .item').removeClass('next');
  $('.owl-item .item').removeClass('prev');
  $active.addClass('prev');
  if($active.is('.last')) {
    $('.owl-item .first').addClass('show');
    $('.owl-item .first').parent().next().children('.item').addClass('prev');
  }
  else {
    $active.parent().next().children('.item').addClass('show');
    if($active.parent().next().children('.item').is('.last')) {
      $('.owl-item .first').addClass('next');
    }
    else {
      $('.owl-item .show').parent().next().children('.item').addClass('next');
    }
  }
});
  

