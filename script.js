const menuOpen = document.querySelector(".toggle-menu");
const menuClose = document.querySelector(".toggle-menu-close");
const sideMenu = document.querySelector(".side-menu");

menuOpen.addEventListener("click", () => {
  sideMenu.classList.add("open");
});

menuClose.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});
