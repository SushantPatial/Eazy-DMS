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

// Footer year
$("#year").html(new Date().getFullYear());