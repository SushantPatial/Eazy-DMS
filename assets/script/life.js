
$(document).ready(function() {
  let $grid = $('.portfolio-container').imagesLoaded( function() {
    $grid.isotope({
      itemSelector : '.portfolio-item', 
      filter: '.filter-awards',
      layoutMode : 'masonry',
      percentPosition: true
    });
  });
    
  $('#portfolio-flters').on('click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $('#portfolio-flters li').removeClass('filter-active');
    $(this).addClass('filter-active');
  });
})

/** Initiate portfolio lightbox **/
const portfolioLightbox1 = GLightbox({
  selector: '.diwali-19-lightbox'
});
const portfolioLightbox2 = GLightbox({
  selector: '.holi-19-lightbox'
});
const portfolioLightbox3 = GLightbox({
  selector: '.year-20-21-lightbox'
});
const portfolioLightbox4 = GLightbox({
  selector: '.year-18-19-lightbox'
});
const portfolioLightbox5 = GLightbox({
  selector: '.year-17-18-lightbox'
});
const portfolioLightbox6 = GLightbox({
  selector: '.hanuwantiya-lightbox'
});
const portfolioLightbox7 = GLightbox({
  selector: '.fortune-orange-lightbox'
});
const portfolioLightbox8 = GLightbox({
  selector: '.golden-tulip-lightbox'
});
const portfolioLightbox9 = GLightbox({
  selector: '.rishikesh-lightbox'
});

$(window).on('load', function() {
  $('.portfolio-container').isotope('reloadItems').isotope();
})

$('#year-20-21-toggler').on('click', function() {
  $('#year-20-21').toggle();
  $('#year-18-19').hide();
  $('#year-17-18').hide();
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$('#year-18-19-toggler').on('click', function() {
  $('#year-18-19').toggle();
  $('#year-20-21').hide();
  $('#year-17-18').hide();
  $('#year-18-19').addClass('window-resize');
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$('#year-17-18-toggler').on('click', function() {
  $('#year-17-18').toggle();
  $('#year-18-19').hide();
  $('#year-20-21').hide();
  $('#year-17-18').addClass('window-resize');
  $('.portfolio-container').isotope('reloadItems').isotope();
})

$('#diwali-19-toggler').on('click', function() {
  $('#diwali-19').toggle();
  $('#holi-19').hide();
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$('#holi-19-toggler').on('click', function() {
  $('#holi-19').toggle();
  $('#diwali-19').hide();
  $('#holi-19').addClass('window-resize');
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$("#holi-19-toggler").one("click", function () {
  setTimeout(function() {
    $('#holi-19').removeClass('window-resize');
  }, 500)
});

$('#hanuwantiya-toggler').on('click', function() {
  $('#hanuwantiya').toggle();
  $('#fortune-orange').hide();
  $('#rishikesh').hide();
  $('#golden-tulip').hide();
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$('#fortune-orange-toggler').on('click', function() {
  $('#fortune-orange').toggle();
  $('#hanuwantiya').hide();
  $('#rishikesh').hide();
  $('#golden-tulip').hide();
  $('#fortune-orange').addClass('window-resize');
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$("#fortune-orange-toggler").one("click", function () {
  setTimeout(function() {
    $('#fortune-orange').removeClass('window-resize');
  }, 500)
});
$('#rishikesh-toggler').on('click', function() {
  $('#rishikesh').toggle();
  $('#fortune-orange').hide();
  $('#hanuwantiya').hide();
  $('#golden-tulip').hide();
  $('#rishikesh').addClass('window-resize');
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$("#rishikesh-toggler").one("click", function () {
  setTimeout(function() {
    $('#rishikesh').removeClass('window-resize');
  }, 500)
});
$('#golden-tulip-toggler').on('click', function() {
  $('#golden-tulip').toggle();
  $('#fortune-orange').hide();
  $('#rishikesh').hide();
  $('#hanuwantiya').hide();
  $('#golden-tulip').addClass('window-resize');
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$("#golden-tulip-toggler").one("click", function () {
  setTimeout(function() {
    $('#golden-tulip').removeClass('window-resize');
  }, 500)
});


$(window).resize(function() {
  $('.masonry').addClass('window-resize');
  setTimeout(function() {
    $('.masonry').removeClass('window-resize');
  }, 500)
});

$('.masonry .fa-times').on('click', function() {
  $('.masonry').hide();
  $('.portfolio-container').isotope('reloadItems').isotope();
})

