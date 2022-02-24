// AOS
AOS.init({
  duration: 700,
  easing: 'ease',
  once: true
});

// Navbar General
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 47) {
    $('.navbar').addClass('navbar-fixed');
  } else {
    $('.navbar').removeClass('navbar-fixed');
  }
});
$(window).on('load', function () {
  if ($(window).scrollTop() > 47) {
    $('.navbar').addClass('navbar-fixed');
  } else {
    $('.navbar').removeClass('navbar-fixed');
  }
});

// Index navbar and back to top
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 2800) {
    $('.nav-index').fadeIn();
    $(".back-to-top").addClass('active-2');
  } else {
    $('.nav-index').fadeOut();
    $(".back-to-top").removeClass('active-2');
  }
});
$(window).on('load', function () {
  if ($(window).scrollTop() > 2800) {
    $('.nav-index').fadeIn();
    $(".back-to-top").addClass('active-2');
  } else {
    $('.nav-index').fadeOut();
    $(".back-to-top").removeClass('active-2');
  }
});

// Back to top 
$(window).on("scroll", function() {
  if ($(window).scrollTop() > 100) {
    $(".back-to-top").addClass('active');
  } else {
    $(".back-to-top").removeClass('active');
  }
})
$(window).on("load", function() {
  if ($(window).scrollTop() > 100) {
    $(".back-to-top").addClass('active');
  } else {
    $(".back-to-top").removeClass('active');
  }
})

// Loader 
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
