$('.title-wrapper').hover(function() {
  $('.title').css("text-decoration", "line-through");
}, function() {
  $('.title').css("text-decoration", "none");
});

$('#door-to-door-path').hover(function() {
  $('#door-to-door-path').attr("fill", "#9EFF00");
}, function() {
  $('#door-to-door-path').attr("fill", "#9EFF0000");
});


$('#rhizoma-path').hover(function() {
  $('#rhizoma-path').attr("fill", "#9EFF00");
}, function() {
  $('#rhizoma-path').attr("fill", "#9EFF0000");
});

$('#becoming-path').hover(function() {
  $('#becoming-path').attr("fill", "#9EFF00");
}, function() {
  $('#becoming-path').attr("fill", "#9EFF0000");
});

$('#mursida-path').hover(function() {
  $('#mursida-path').attr("fill", "#9EFF00");
}, function() {
  $('#mursida-path').attr("fill", "#9EFF0000");
});

$('#mursida-path').click(function() {
  // $('#mursida-video')[0].play();
  var video = $("#mursida-video").get(0);
  if ( video.paused ) {
    video.play();
    $("#mursida-path").hide(500);
  }
});


const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('question-form');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => {
    $("form").hide(500);
    $("#success-form").show(500);
  }).catch((error) =>
    alert(error))
}
document.querySelector("form").addEventListener("submit", handleSubmit);
