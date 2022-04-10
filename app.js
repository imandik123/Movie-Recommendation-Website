const hamburger_menu = document.querySelector(".click-btn");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
