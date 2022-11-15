let body = document.body;
let blobs = document.querySelectorAll(".blob");
let container = document.querySelector(".wrapper");



  // place our blobs randomly
  blobs.forEach(function (blob) {
    blob.style.right = (80 * Math.random()) + '%';
    blob.style.top = (50 * Math.random()) + '%';
  });

  function turnNight() {
  body.classList.toggle("bodyNight");
  blob.classList.toggle("blobNight");
}


body.addEventListener("click", turnNight);

  // container.addEventListener("click", function (event) {
  //   if (event.target.classList.contains("blob")) {
  //     event.target.remove();
  //   }
  // });



// let body = document.body;
// let box = document.querySelector(".box");
// let bulb = document.querySelector(".bulb");


// function turnOnLight() {
//   body.classList.toggle("light");
//   button.classList.toggle("buttonOn");
//   box.classList.toggle("boxActive");
//   bulb.classList.toggle("bulbOn");
// }



// let button = document.querySelector(".button");
// button.addEventListener("click", turnOnLight);