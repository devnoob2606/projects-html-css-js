let navBar = document.querySelector("#nav-menu");
let moblime = document.querySelector("#moblime");
let active = "active"

moblime.addEventListener("click", navMenu);

function navMenu() {
    navBar.classList.toggle(active);
}