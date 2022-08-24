let toggleBtn = document.getElementById("toggleBtn");

let links = document.querySelector(".links");

// let link = Array.from(document.getElementsByTagName('a'));

// console.log(link);

toggleBtn.addEventListener("click", () => {
  links.classList.toggle("hide-links");
});
