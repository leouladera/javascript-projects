const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const rest = document.getElementById("reset");
btn.addEventListener("click", function () {
  let hexcolor = "#";
  for (let i = 0; i < 6; i++) {
    hexcolor += hex[getRandomNumber()];
  }
  color.textContent = hexcolor;
  document.body.style.backgroundColor = hexcolor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
rest.addEventListener("click", function () {
  document.body.style.backgroundColor = "#F1f5f8";
  color.textContent = "#F1f5f8";
});
