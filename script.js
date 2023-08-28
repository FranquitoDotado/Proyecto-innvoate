/* Menu */
const openButton = document.querySelectorAll(".menu-button");
const closeButton = document.querySelector(".close-button")
const menu = document.querySelector(".menu");

openButton.forEach(element => {
    element.addEventListener("click", () => {
        menu.classList.add("open");
        menu.classList.remove("div-hidden");
    });
});

closeButton.addEventListener("click", function() {
    menu.classList.remove("open");
});

/* Detail button */

const openDetail = document.querySelectorAll(".menu-button");
const closeDetail = document.querySelector(".close-button")
const menuDetail = document.querySelector(".menu-detail");

openDetail.forEach(element => {
    element.addEventListener("click", () => {
        menuDetail.classList.remove("div-hidden");
    });
});

closeButton.addEventListener("click", function() {
    menu.classList.remove("open");
});