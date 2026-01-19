const span = document.querySelector(".year");
const menuBtn = document.querySelector(".menu-btn");
const close = document.querySelector(".menu-btn--close");
const menu = document.querySelector(".main-nav-mobile");
const now = new Date();

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
  document.body.style.overflow = "hidden";
});
close.addEventListener("click", () => {
  menu.classList.remove("active");
  document.body.style.overflow = "auto";
});

span.textContent = now.getFullYear();
