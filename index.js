// Lamp cursor effect (desktop only)
const lamp = document.getElementById("lamp");
let lampVisible = window.matchMedia("(hover: hover)").matches;
if (!lampVisible) {
  lamp.style.display = "none";
}
window.addEventListener("mousemove", (e) => {
  lamp.style.left = e.clientX + "px";
  lamp.style.top = e.clientY + "px";
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
reveals.forEach((el) => io.observe(el));

// Mobile menu
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");
burgerBtn.addEventListener("click", () => mobileMenu.classList.add("open"));
mobileClose.addEventListener("click", () =>
  mobileMenu.classList.remove("open"),
);
mobileMenu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

// Header background intensifies on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.background = "rgba(18,20,28,0.85)";
  } else {
    header.style.background = "rgba(18,20,28,0.55)";
  }
});
