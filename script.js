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

e.addEventListener('click',()=>{

  // console.log(e.firstElementChild);

  // e.firstElementChild.requestFullscreen();
  
  if (e.classList.contains('open')) {
    e.classList.remove('open')    
  }
  else(e.classList.add('open'))
})

});
