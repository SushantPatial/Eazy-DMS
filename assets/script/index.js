// Load page from top
$(window).onbeforeunload = function () {
  $(window).scrollTop(0);
}
$(window).ready(function(){
  $(window).scrollTop(0);
});

// Making page scroll after 5s
$(window).on('load', function() {
  if ($(window).scrollTop() < 100) {
    $('html').css('overflow-y', 'hidden');
    $('.scroll-down-wrapper').css('opacity', '0');
    setTimeout(function() {
      $('html').css('overflow-y', 'scroll');
      $('.scroll-down-wrapper').css('opacity', '1');
    }, 5000)
  }
})


gsap.timeline({
  scrollTrigger: {
    trigger: ".grid-container",
    start: "top top",
    end: () => innerHeight * 4,
    scrub: 0.5,
    pin: ".grid",
    anticipatePin: 1
  }
})
.set(".gridBlock", {autoAlpha: 1})
.from(".gridLayer", {
  scale: 3,
  ease: "none",
});

gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause", // Scoll effect Forward, Leave, Back, Back Leave
    markers: false // Easaly remove markers for production 
  });

  const timelineHeader = gsap.timeline({
    scrollTrigger: {
    trigger: "#header-zoom", 
    scrub: 0.5, 
    start: "top top", 
    end: () => innerHeight * 4,
    pin: true
  }
});
timelineHeader
  .to(".video", {
    scale: 0.7
  }, "sameTime")


var isMobile = false;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
  isMobile = true;
}

// $(document).ready(function() {
//   if (isMobile) {
//     $(".grid-container").hide();
//     $("#header-zoom").hide();
//     $(".hero-head").hide();
    
//     $(".header-mobile").show();
//     $("html").css("overflow-x", "hidden");
//     $('body').css('overflow-y','scroll');
//     $(".main-section").addClass("main-section-mobile");

//     let timesRun = 0;
//     let interval = setInterval(function() {
//       timesRun++;
//       if (timesRun == 50) {
//         clearInterval(interval);
//       }
//       $(".pin-spacer").hide();
//     },200)
//   }
//   else {
//     $(".grid-container").show();
//     $("#header-zoom").show();
//     $(".hero-head").show();
//     $(".header-mobile").hide();
//     $(".main-section").removeClass("main-section-mobile");
//     $('body').css('overflow-y','scroll');
//   /*  $('.scroll-down-arrow a').hide();
//     setTimeout(function() {
//       $('body').css('overflow-y','scroll');
//       $('.scroll-down-arrow a').fadeIn('slow');
//     }, 5000) */
//   }
// });

$(window).bind('scroll', function () {
  if ($(window).width() > 576) {
    if ($(window).scrollTop() > 2600) {
      $(".scroll-down-arrow").addClass("scroll-down-arrow-absolute");
    } else {
      $('.scroll-down-arrow').removeClass('scroll-down-arrow-absolute');
    }
  } else if ($(window).width() <= 576 && $(window).width() > 360) {
    if ($(window).scrollTop() > 2500) {
      $(".scroll-down-arrow").addClass("scroll-down-arrow-absolute");
    } else {
      $('.scroll-down-arrow').removeClass('scroll-down-arrow-absolute');
    }
  } else if ($(window).width() <= 360) {
    if ($(window).scrollTop() > 2460) {
      $(".scroll-down-arrow").addClass("scroll-down-arrow-absolute");
    } else {
      $('.scroll-down-arrow').removeClass('scroll-down-arrow-absolute');
    }
  }
  
});

$(window).bind('scroll', function () {
  if ($("#header-zoom .video").html() != '<img src="assets/images/index.png">' && $(window).scrollTop() >= 1600) {
    $("#header-zoom .video").hide().html('<img src="assets/images/index.png">').fadeIn();
  } 
  if ($("#header-zoom .video").html() != '<video autoplay="" loop="" muted=""><source src="assets/images/index.mp4"></video>' && $(window).scrollTop() < 1600) {
    $("#header-zoom .video").hide().html('<video autoplay="" loop="" muted=""><source src="assets/images/index.mp4"></video>').fadeIn();
  }
});


$('#parallax').parallax({
	invertX: true,
	invertY: true
});


$('.modal').on('touchstart touchmove touchend', function(e) {
  e.stopPropagation();
});

// Detect scroll to div
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop;
  return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

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

// Brand Carousel 
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


// Testimonials Carousel 
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


// var swiper0 = new Swiper(".swiper-0", {
//   loop: true,
//   allowTouchMove: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
// let swiper1 = new Swiper(".swiper-1", {
//   loop: true,
//   allowTouchMove: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
// let swiper2 = new Swiper(".swiper-2", {
//   loop: true,
//   allowTouchMove: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
// let swiper3 = new Swiper(".swiper-3", {
//   loop: true,
//   allowTouchMove: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });



