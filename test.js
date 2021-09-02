const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#slider__list");

let currentRight = 0;

rightBtn.addEventListener("click", e => {
    e.preventDefault();

    currentRight += 100;

    slider__list.style.right = `${currentRight}px`;

});

leftBtn.addEventListener("click", e => {

});