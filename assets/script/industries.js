// Brand Carousel 
$(document).ready(function() {
  $('.brand-carousel').owlCarousel({
    loop:true,
    center:true,
    margin:60,
    autoWidth:true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    fluidSpeed: true,
    autoplaySpeed: 1000
  })
})

// $(window).on('scroll', function() {
//   if ($(window).scrollTop() > 100) {
//     $('.particles').css({
//       position: 'fixed',
//       top: '100px'
//     });
//   } else {
//     $('.particles').css({
//       position: 'absolute',
//       top: '200px'
//     });
//   }

//   // Stopping the fixed position
//   let div1 = $(".lower-particle");
//   let div2 = $(".particles-bottom");
//   let div1_top = div1.offset().top;
//   var div2_top = div2.offset().top;
//   let div1_bottom = div1_top + div1.height();
//   let div2_bottom = div2_top + div2.height();

//   if (div1_top >= div2_top) {
//     $('.particles').css({
//       position: 'absolute',
//       top: div2_bottom - $('.particles').height()
//     });
//   }
// })


/*Footer*/
$("footer .footer-content .other-products a .erp").on("mouseenter", function() {
  $(this).attr("src","../assets/images/logos/ERP-bg.png");
})
$("footer .footer-content .other-products a .erp").on("mouseleave", function() {
  $(this).attr("src","../assets/images/logos/ERP.png");
})

$("footer .footer-content .other-products a .crm").on("mouseenter", function() {
  $(this).attr("src","../assets/images/logos/CRM-bg.png");
})
$("footer .footer-content .other-products a .crm").on("mouseleave", function() {
  $(this).attr("src","../assets/images/logos/CRM.png");
})

$("footer .footer-content .other-products a .pos").on("mouseenter", function() {
  $(this).attr("src","../assets/images/logos/POS-bg.png");
})
$("footer .footer-content .other-products a .pos").on("mouseleave", function() {
  $(this).attr("src","../assets/images/logos/POS.png");
})

$("footer .footer-content .other-products a .retail").on("mouseenter", function() {
  $(this).attr("src","../assets/images/logos/RETAIL-bg.png");
})
$("footer .footer-content .other-products a .retail").on("mouseleave", function() {
  $(this).attr("src","../assets/images/logos/RETAIL.png");
})

// Footer year
$("#year").html(new Date().getFullYear());