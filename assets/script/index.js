
$(document).ready(function() {
  var url = window.location.href;
  console.log(url);
  if( url.indexOf('#') < 0 ) {
      window.location.replace(url + "#");
  } else {
      window.location.replace(url);
  }
});


$(document).ready(function() {
  var s = skrollr.init();
  if (s.isMobile()) {
    s.destroy();
    $(".header").hide();
    $(".hero-head").hide();
    $(".header-mobile").show();
    $("html").css("overflow-x", "hidden");
    $('body').css('overflow-y','scroll');
    $(".main-section").addClass("main-section-mobile");
  }
  else {
    $(".header").show();
    $(".hero-head").show();
    $(".header-mobile").hide();
    $(".main-section").removeClass("main-section-mobile");
    $('body').css('overflow-y','hidden');
    $('.scroll-down-arrow a').hide();
    setTimeout(function() {
      $('body').css('overflow-y','scroll');
      $('.scroll-down-arrow a').fadeIn('slow');
    }, 5000) 
  }
});


gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause", // Scoll effect Forward, Leave, Back, Back Leave
    markers: false // Easaly remove markers for production 
  });

  const timelineHeader = gsap.timeline({
    scrollTrigger: {
    trigger: "#header-zoom", // What element triggers the scroll
    scrub: 0.5, // Add a small delay of scrolling and animation. `true` is direct
    start: "top top", // Start at top of Trigger and at the top of the viewport
    end: "+=310% 50px", // The element is 500px hight and end 50px from the top of the viewport
    pin: true, // Pin the element true or false
  }
});
timelineHeader
  .to(".video", {
    scale: 0.7
  }, "sameTime")


$('#parallax').parallax({
	invertX: true,
	invertY: true
});

$(window).bind('scroll', function () {
  if ($("#header-zoom .video").html() != '<img src="assets/images/index.png">' && $(window).scrollTop() >= 1600) {
    $("#header-zoom .video").hide().html('<img src="assets/images/index.png">').fadeIn();
  } 
  if ($("#header-zoom .video").html() != '<video autoplay="" loop="" muted=""><source src="assets/images/index.mp4"></video>' && $(window).scrollTop() < 1600) {
    $("#header-zoom .video").hide().html('<video autoplay="" loop="" muted=""><source src="assets/images/index.mp4"></video>').fadeIn();
  }
  
});


$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 1955) {
    $(".scroll-down-arrow").addClass("scroll-down-arrow-absolute");
  } else {
    $('.scroll-down-arrow').removeClass('scroll-down-arrow-absolute');
  }
});



  AOS.init();

  skrollr.init({forceHeight: false}); 
// Detect scroll to div
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop;
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$('.modal').on('touchstart touchmove touchend', function(e) {
  e.stopPropagation();
});

$(window).scroll(function() {    
  if(isScrolledIntoView($('#stats-box'))) {
    $('.counting').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });  
    });  
  }    
});

// Owl Carousel 
$(document).ready(function() {
  $('.brand-carousel').owlCarousel({
    loop:true,
    center:true,
    margin:30,
    autoWidth:true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    fluidSpeed: true,
    autoplaySpeed: 1000
  })

  $('#story1').on('hidden.bs.modal', function () {
    $("#story1 iframe").attr("src", $("#story1 iframe").attr("src"));
  });
  $('#story2').on('hidden.bs.modal', function () {
    $("#story2 iframe").attr("src", $("#story2 iframe").attr("src"));
  });
  $('#story3').on('hidden.bs.modal', function () {
    $("#story3 iframe").attr("src", $("#story3 iframe").attr("src"));
  });
  $('#story4').on('hidden.bs.modal', function () {
    $("#story4 iframe").attr("src", $("#story4 iframe").attr("src"));
  });
  
});



$('.testimonials-carousel').owlCarousel({
  mouseDrag: false,
  touchDrag: false,
  loop: true,
  margin: 2,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1,
      touchDrag: true
    },
    992: {
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


var swiper0 = new Swiper(".swiper-0", {
  loop: true,
  allowTouchMove: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let swiper1 = new Swiper(".swiper-1", {
  loop: true,
  allowTouchMove: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let swiper2 = new Swiper(".swiper-2", {
  loop: true,
  allowTouchMove: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let swiper3 = new Swiper(".swiper-3", {
  loop: true,
  allowTouchMove: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



