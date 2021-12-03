$(document).ready(function() {
  var s = skrollr.init();
  if (s.isMobile()) {
    s.destroy();
    $(".header").hide();
    $(".hero-head").hide();
    $(".header-mobile").show();
    $("html").css("overflow-x", "hidden");
    $(".main-section").addClass("main-section-mobile");
  }
  else {
    $(".header").show();
    $(".hero-head").show();
    $(".header-mobile").hide();
    $(".main-section").removeClass("main-section-mobile");
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