// Toggle menu
const navbarNav = document.querySelector(".navbar-nav");
const menuToggle = document.querySelector("#menu-toggle");

menuToggle.addEventListener("click", function (event) {
  event.preventDefault();
  navbarNav.classList.toggle("active");
});

// Close menu saat klik di luar
document.addEventListener("click", function (e) {
  if (!menuToggle.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
