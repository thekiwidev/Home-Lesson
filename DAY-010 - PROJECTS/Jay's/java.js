const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");



menu.addEventListener("click", () => {
    nav.classList.toggle("show")
    footer.classList.toggle("show")
} )