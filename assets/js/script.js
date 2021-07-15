$('.title-wrapper').hover(function() {
  $('.title').css("text-decoration", "line-through");
}, function() {
  $('.title').css("text-decoration", "none");
});

$('#door-to-door-line').hover(function() {
  $('#door-to-door-path').attr("fill", "#9EFF00");
}, function() {
  $('#door-to-door-path').attr("fill", "#9EFF0000");
});
