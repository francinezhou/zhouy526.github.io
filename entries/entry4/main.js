var Boxes = document.querySelectorAll(".Grid__box");

// generate cycles
Boxes.forEach(function(Box) {
Box.innerHTML += "<div class='cycle'></div>";

// watch cycles
Box.addEventListener('mousemove', function (e) {
  var Cycle = Box.lastElementChild;

  // set postion
  var x = e.clientX;
  var y = e.clientY;
  var BoxOffset = Box.getBoundingClientRect();

  var newposX = x - BoxOffset.left - 100;
  var newposY = y - BoxOffset.top - 100;
  Cycle.style.transform = "translate("+newposX+"px, "+newposY+"px)";
});
  
  Box.addEventListener('mouseout', function (e) {
    var Cycle = Box.lastElementChild;
    Cycle.style.transform = "translate(0px, 0px)";
  });
});
