// Menu toggle
const hamburger = document.querySelector("#hamburger");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  nav.classList.toggle("slide");
});
