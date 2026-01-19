const span = document.querySelector(".year");
const menuBtn = document.querySelector(".menu-btn");
const close = document.querySelector(".menu-btn--close");
const menu = document.querySelector(".main-nav-mobile");
const mobileNav = document.querySelectorAll(".nav_link--mobile");
const now = new Date();

function handelOpenMenu() {
  menu.classList.add("active");
  document.body.style.overflow = "hidden";
}
function handelCloseMenu() {
  menu.classList.remove("active");
  document.body.style.overflow = "auto";
}
menuBtn.addEventListener("click", handelOpenMenu);

close.addEventListener("click", handelCloseMenu);

mobileNav.forEach((li) => {
  li.addEventListener("click", handelCloseMenu);
});

span.textContent = now.getFullYear();
