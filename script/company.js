$(document).ready(function() {
  
  let $grid = $('.portfolio-container');

  $('a[data-toggle="tab"]').on('shown.bs.tab', function () {
     $grid.isotope({
      itemSelector: '.portfolio-item',
      filter: '.filter-festive',
      layoutMode: 'masonry'
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
const portfolioLightbox = GLightbox({
  selector: '.portfolio-lightbox'
});


function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
  });
  $('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});