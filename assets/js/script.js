var scrollPosition = document.body.scrollTop,
    boxPositions = [0,-1.5,-3,-4.5,-6,-7.5,-9,-10.5,-12,-13.5,-15,-16.5,-18,-19.5];
var scrollDif = 500;

function moveCamera() {
    var boxes = document.getElementsByClassName("box");
    var labels = document.getElementsByClassName("act-name");
    // var bottom_nav = document.getElementsByClassName("btn-back")[0];

    var newScrollPosition = document.body.scrollTop;
    for (var i=0,l=boxes.length;i<l;i++) {
        var boxZ = boxPositions[i] + newScrollPosition/scrollDif;
        boxes[i].style["-webkit-transform"] = "translateZ("+ boxZ +"px)";
        boxes[i].style["opacity"] = (boxZ < 1.5) ? 1 : 0;

        labels[i].style["opacity"] = ((boxZ < 1.5) && (boxZ > 0.2)) ? 1 : 0;
        boxes[i].style["visibility"] = (boxZ < 1.8) ? 'visible' : 'hidden';

        // if(i == l-1) bottom_nav.style["visibility"] = (boxZ > 1.5) ? 'visible' : 'hidden';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var bottom_nav = document.getElementsByClassName("btn-back")[0];
    // bottom_nav.style["opacity"] = 0;
    // window.addEventListener("load", function(){
        // bottom_nav.style["visibility"] = 'visible';
    // });
    window.addEventListener("scroll", moveCamera);
    window.addEventListener('resize', moveCamera);
    moveCamera();
});

$('.title-wrapper').hover(function() {
  $('.title').css("text-decoration", "line-through");
}, function() {
  $('.title').css("text-decoration", "none");
});
