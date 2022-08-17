let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let stop = document.querySelector(".stop");
let video = document.querySelector(".video-container");

play.addEventListener("click", () => {
  video.play();
});

pause.addEventListener("click", () => {
  video.pause();
});

stop.addEventListener("click", () => {
  video.currentTime = 0;
  video.pause();
});
