const colors = [
  "green",
  "red",
  "rgba(133, 122, 200)",
  "#f15025",
  "blue",
  "yellow",
  "blanchedalmond",
  "light green",
  "black",
  "orange",
  "purple",
  "pink",
  "light blue",
  "gray",
];
const btn = document.getElementById("btn");
const reset = document.getElementById("reset");
const color = document.querySelector(".color");
const rest = document.querySelector(".rst");
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
reset.addEventListener("click", function () {
  document.body.style.backgroundColor = "#F1f5f8";
  color.textContent = "#F1f5f8";
});
