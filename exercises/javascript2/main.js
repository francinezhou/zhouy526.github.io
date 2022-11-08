
let body = document.body;
let box = document.querySelector(".box");
let bulb = document.querySelector(".bulb");


function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
  box.classList.toggle("boxActive");
  bulb.classList.toggle("bulbOn");
}



let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);