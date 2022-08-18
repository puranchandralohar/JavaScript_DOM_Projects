let flag = 0;

function controll(x) {
  flag = flag + x;
  slideshow(flag);
}

slideshow(flag);
function slideshow(num) {
  let slides = document.getElementsByClassName("slide");
  // console.log(slides);

  if (num == slides.length) {
    flag = 0;
    num = 0;
  }

  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  for (let i of slides) {
    i.style.display = "none";
  }
  slides[num].style.display = "block";
}
