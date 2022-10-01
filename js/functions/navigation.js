// Open/close hamburger menu
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav-overlay");
const body = document.querySelector("body");

menuButton.addEventListener("click", openMenu);

function openMenu() {
  nav.classList.toggle("active");
  if (menuButton.classList.toggle("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
  }
}
