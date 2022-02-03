$(document).on("submit", "#contact-form", function(e) {
  if (!$("#contact_state").val()) {
    alert("Please select state");
    e.preventDefault();
    return false;
  }
});