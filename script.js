let video = document.querySelectorAll(".page");
let closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  const dialog = document.querySelector("dialog");
  dialog.close()
});

video.forEach((e) => {
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

  e.addEventListener("click", () => {
    // console.log(e.firstElementChild);

    // e.firstElementChild.requestFullscreen();

    // if (e.classList.contains('open')) {
    //   e.classList.remove('open')
    // }
    // else(e.classList.add('open'))

    const dialog = document.querySelector("dialog");

    console.log("element", e);

    console.log("parent", e.parentElement.parentElement.firstElementChild);

    const title = dialog.querySelector(".title");

    title.textContent =
      e.parentElement.parentElement.firstElementChild.textContent;

    const video = dialog.querySelector("video");

    video.src = e.firstElementChild.src;

    console.log(e.firstElementChild.src);

    dialog.showModal();
  });
});
