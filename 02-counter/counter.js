//select initial value
const color = ["green", "red"];
let count = 0;

// select buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }
    if (count > 0) {
      value.style.color = color[0];
    } else if (count < 0) {
      value.style.color = color[1];
    } else if (count == 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
