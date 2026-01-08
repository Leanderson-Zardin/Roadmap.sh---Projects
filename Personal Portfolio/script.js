const html = document.querySelector("html");
const btn = document.querySelector(".dark-mode-list");

btn.addEventListener("click", function() {
  html.classList.toggle("dark-mode");
})