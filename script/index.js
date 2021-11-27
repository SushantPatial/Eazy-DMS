$(document).ready(function() {
  var s = skrollr.init();
});

  AOS.init();
  AOS.init({disable: 'mobile'});
  skrollr.init({forceHeight: false}); 
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