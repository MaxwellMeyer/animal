$(document).ready(function() {
  $(".Turtles").click(function() {
    $("#turtle").fadeIn();
    $("#snake").hide();
    $("#bear").hide();
  })
  $(".Snakes").click(function() {
    $("#snake").fadeIn();
    $("#bear").hide();
    $("#turtle").hide();
  })
  $(".Bears").click(function() {
    $("#bear").fadeIn();
    $("#snake").hide();
    $("#turtle").hide();
  })
});
