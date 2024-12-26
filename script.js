const body = document.getElementsByTagName("body")[0];
const bars = document.getElementById("bars");
const sidebar = document.getElementById("sidebar");

bars.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
});
