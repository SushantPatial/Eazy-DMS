// AOS
AOS.init();

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 47) {
    $('.navbar').addClass('navbar-fixed');
  } else {
    $('.navbar').removeClass('navbar-fixed');
  }
});


$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 2800) {
    $('.nav-index').fadeIn();
  } else {
    $('.nav-index').fadeOut();
  }
});



$(window).on("load",function() {
  $(".loader-wrapper").fadeOut("slow");
  $(".navbar").fadeIn("slow");
});

$('.industries').on('click', function() {
  $('.nav-dropdown-content').slideToggle();
  if ($('.navbar .nav-link .fa-caret-down').hasClass('flip')) {
    $('.navbar .nav-link .fa-caret-down').removeClass('flip');
  } else {
    $('.navbar .nav-link .fa-caret-down').addClass('flip');
  }
})
$(document).click(function(event) {
  if (!$(event.target).hasClass('industries')) {
    $('.nav-dropdown-content').slideUp();
    $('.navbar .nav-link .fa-caret-down').removeClass('flip');
  }
});



/*Footer*/
$("footer .footer-content .other-products a .erp").on("mouseenter", function() {
  $(this).attr("src","assets/images/logos/ERP-bg.png");
})
$("footer .footer-content .other-products a .erp").on("mouseleave", function() {
  $(this).attr("src","assets/images/logos/ERP.png");
})

$("footer .footer-content .other-products a .crm").on("mouseenter", function() {
  $(this).attr("src","assets/images/logos/CRM-bg.png");
})
$("footer .footer-content .other-products a .crm").on("mouseleave", function() {
  $(this).attr("src","assets/images/logos/CRM.png");
})

$("footer .footer-content .other-products a .pos").on("mouseenter", function() {
  $(this).attr("src","assets/images/logos/POS-bg.png");
})
$("footer .footer-content .other-products a .pos").on("mouseleave", function() {
  $(this).attr("src","assets/images/logos/POS.png");
})

$("footer .footer-content .other-products a .retail").on("mouseenter", function() {
  $(this).attr("src","assets/images/logos/RETAIL-bg.png");
})
$("footer .footer-content .other-products a .retail").on("mouseleave", function() {
  $(this).attr("src","assets/images/logos/RETAIL.png");
})
