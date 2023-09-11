// Menu toggle
const hamburger = document.querySelector("#hamburger");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  nav.classList.toggle("slide");
});

// Scroll Link
const links = document.querySelectorAll(".links");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetId) {
      const offset = 80;
      const targetScrollPosition =
        targetSection.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth",
      });
    }
  });
});
