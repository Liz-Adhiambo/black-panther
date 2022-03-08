$(document).ready(function() {
  $(".clickable").click(function() {
    $("#panther-showing").slideToggle();
    $("#panther-hidden").slideToggle();
  });
});