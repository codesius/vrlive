document.addEventListener("DOMContentLoaded", function () {
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    left.style.opacity = 1;
    left.style.transform = "translateX(0)";
    right.style.opacity = 1;
    right.style.transform = "translateX(0)";
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