
$(document).ready(function() {
  
  let $grid = $('.portfolio-container');

  $grid.isotope({
    itemSelector: '.portfolio-item',
    filter: '.filter-awards',
    layoutMode: 'masonry'
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



$('#year-20-21-toggler').on('click', function() {
  $('#year-20-21').toggle();
  $('.portfolio-container').isotope( 'reloadItems' ).isotope( { sortBy: 'original-order' } );
})

$('#year-18-19-toggler').on('click', function() {
  $('#year-18-19').toggle();
  $('.portfolio-container').isotope( 'reloadItems' ).isotope( { sortBy: 'original-order' } );
})
$('#year-17-18-toggler').on('click', function() {
  $('#year-17-18').toggle();
  $('.portfolio-container').isotope( 'reloadItems' ).isotope( { sortBy: 'original-order' } );
})
