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
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const text = document.querySelector(".fade-out");
const text2 = document.querySelector(".fade-out2");
const cart = document.querySelector("#shop");

function animateText() {

text.style.visibility = "visible";
text.classList.remove("fade-out");
text2.style.visibility = "visible";
text2.classList.remove("fade-out2");

void text.offsetWidth;
void text2.offsetWidth;

text.classList.add("fade-out");
text2.classList.add("fade-out2");
cart.style.display = "block";
setTimeout(function() {
    text.style.visibility = "hidden";
    text2.style.visibility = "hidden";
}, 4000);
}

btn.addEventListener("click", animateText);
btn2.addEventListener("click", animateText);

document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.querySelector(".quantity-input");
    const plusButton = document.querySelector(".plus");
    const minusButton = document.querySelector(".minus");
  
    plusButton.addEventListener("click", function () {
      quantityInput.stepUp(); 
    });
  
    minusButton.addEventListener("click", function () {
      quantityInput.stepDown();
    });
  });
  