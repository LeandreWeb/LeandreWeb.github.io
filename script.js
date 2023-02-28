let video = document.querySelectorAll(".page");
let closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  const dialog = document.querySelector("dialog");
  dialog.close();
});

// window.addEventListener("resize", ()=>{
//   const dialog = document.querySelector("dialog");

//   console.log(dialog.open  );

//   if(dialog.open && window.innerWidth < 645){
//     console.log("lets a go");

//     const video=dialog.querySelector("video")

//     console.log(video);

//     video.requestFullscreen()

//   }
// });

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

    if (window.innerWidth < 645) {
      e.firstElementChild.requestFullscreen();
    } else {
      const dialog = document.querySelector("dialog");

      const title = dialog.querySelector(".title");

      title.textContent =
        e.parentElement.parentElement.firstElementChild.textContent;

      const video = dialog.querySelector("video");

      video.src = e.firstElementChild.src;

      dialog.showModal();
    }
  });
});
