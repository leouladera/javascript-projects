//.classList = shows/gets all classes
//.contains('class') = checks classList for specfic class
//.add('class') = add classes
//.remove('class') = remove classes
//toggle('class') = toggle class/ turn off or turns on (same as if statment with add and remove)

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});
