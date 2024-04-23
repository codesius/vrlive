document.addEventListener("DOMContentLoaded", function () {
    const top = document.querySelector(".top");
    const bottom = document.querySelector(".bottom");
    top.style.opacity = 1;
    top.style.transform = "translateX(0)";
    bottom.style.opacity = 1;
    bottom.style.transform = "translateX(0)";
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
