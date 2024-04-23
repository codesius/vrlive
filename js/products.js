document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const buyBtn = document.querySelector(".buyBtn");
    container.style.opacity = 1;
    container.style.transform = "translateX(0)";
    buyBtn.style.opacity = 1;
    buyBtn.style.transform = "translateX(0)";
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

const slider = document.querySelector('.slider');
let currentIndex = 0;

function showSlide(index) {
slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
hideBuyButton(currentIndex); // Hide the current "BUY" button
currentIndex = (currentIndex + 1) % slider.children.length;
showSlide(currentIndex); // Show the new slide
showBuyButton(currentIndex); // Show the corresponding "BUY" button
}

function prevSlide() {
hideBuyButton(currentIndex); // Hide the current "BUY" button
currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
showSlide(currentIndex); // Show the new slide
showBuyButton(currentIndex); // Show the corresponding "BUY" button
}

function hideBuyButton(index) {
const buyButtons = document.querySelectorAll('.buyBtn button');
buyButtons[index].style.display = 'none';
}

function showBuyButton(index) {
const buyButtons = document.querySelectorAll('.buyBtn button');
buyButtons[index].style.display = 'block';
}

showSlide(currentIndex);
showBuyButton(currentIndex); 



const headset = document.querySelector("#headset");
headset.addEventListener('click', function() {
    
    window.location.href = 'headset.html'
});
const headset2 = document.querySelector("#headset2");
headset2.addEventListener('click', function() {
    
    window.location.href = 'headset2.html'
});
const headset3 = document.querySelector("#headset3");
headset3.addEventListener('click', function() {
    
    window.location.href = 'headset3.html'
});
