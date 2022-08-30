const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", openMenu);

function openMenu() {
  nav.classList.toggle("active");
}

closeButton.addEventListener("click", closeMenu);

function closeMenu() {
  nav.classList.remove("active");
}
