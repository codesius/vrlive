document.addEventListener("DOMContentLoaded", function () {
    const mainTop = document.querySelector(".main-top");
    const mainBottom = document.querySelector(".main-bottom");
    mainTop.style.opacity = 1;
    mainTop.style.transform = "translateX(0)";
    mainBottom.style.opacity = 1;
    mainBottom.style.transform = "translateX(0)";
});
  
const menu = document.querySelector(".menu");
const hidden = document.querySelector(".hidden");
let clicked = false;

menu.addEventListener('click', function() {
    clicked = !clicked;

    if (clicked) {
        hidden.style.display = "block"
    } else {
        hidden.style.display = "none"

    }
});
const discover = document.querySelector("#discover");
discover.addEventListener('click', function() {
    
    window.location.href = './pages/products.html'
});
