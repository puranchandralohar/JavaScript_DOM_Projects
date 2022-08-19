let btn = Array.from(document.getElementsByClassName("tab-btn"));
let content = Array.from(document.getElementsByClassName("content"));

for (let i = 0; i < content.length; i++) {
  btn[i].addEventListener("click", (e) => {
    for (let j = 0; j < content.length; j++) {
      content[j].style.display = "none";
      btn[j].style.backgroundColor = "";
    }
    content[i].style.display = "block";
    btn[i].style.backgroundColor = "#b1b1b1";
  });
}
