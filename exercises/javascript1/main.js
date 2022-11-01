
let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.add("buttonOn");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);