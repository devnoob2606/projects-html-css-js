let search = document.querySelector(".input-search");
let links = document.querySelector(".links");
let menu = document.querySelector('.menu');
let iconClose = document.querySelector(".icon");

function openMenu() {
    links.classList.toggle('open');
    iconClose.setAttribute('name', links.classList.contains('open')? 'close-outline' : 'menu-outline');
    menu.classList.toggle('open');
  }

function searchOpen() {
    search.classList.toggle("search");
}