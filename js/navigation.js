const menuToggler = document.querySelector(".header__nav-burger");
const menu = document.querySelector(".main-menu");

if (menuToggler && menu) {
  menuToggler.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    menu.classList.toggle("active")
  });
}
