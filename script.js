/* Menu */
const openButton = document.querySelector(".menu-button");
const openDskButton = document.querySelector(".dsk-menu-button");
const closeButton = document.querySelector(".close-button")
const menu = document.querySelector(".menu");

openButton.addEventListener("click", () => {
    menu.classList.add("open");
    menu.classList.remove("div-hidden");
});

openDskButton.addEventListener("mouseenter", () => {
    menu.classList.add("open");
    menu.classList.remove("div-hidden");
});

menu.addEventListener("mouseleave", () => {
    menu.classList.remove("open");
})

closeButton.addEventListener("click", function () {
    menu.classList.remove("open");
});

/* Detail button */

const openDetail = document.querySelectorAll(".detail-button");
const closeDetail = document.querySelector(".close-detail-button")
const menuDetail = document.querySelector(".menu-detail");

openDetail.forEach(element => {
    element.addEventListener("click", () => {
        menuDetail.classList.remove("div-hidden");
    });
});

closeDetail.addEventListener("click", function () {
    menuDetail.classList.add("div-hidden");
});