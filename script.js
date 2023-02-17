let video = document.querySelectorAll(".page");

video.forEach((e) => {
  console.log(e);
  e.addEventListener("mouseover", () => {
    let video = e.querySelector("video");
    if (video) {
      video.play();
    }
  });
  e.addEventListener("mouseout", () => {
    let video = e.querySelector("video");
    if (video) {
      video.pause();
    }
  });
});
