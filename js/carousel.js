const images = [
  "https://cdn.pixabay.com/photo/2021/07/18/17/43/lake-6476212__340.jpg",
  "https://cdn.pixabay.com/photo/2021/07/17/11/45/stamen-6472927__340.jpg",
  "https://cdn.pixabay.com/photo/2021/02/07/17/22/sunrise-5992075__340.jpg",
];

window.addEventListener("load", (e) => {
  console.log("Yeeeeah ....we are in.!!");
  let index = 0;
  let length = images.length;

    setInterval(() => {
      document.querySelector(".custom_carousel_image_container img").src =
        images[index];
      index++;
      if (index >= length) {
        index = 0;
      }
    }, 2500);
});

document
  .querySelector(".fas.fa-chevron-left")
  .addEventListener("click", (e) => {
    let imgIndex = document.querySelector(
      ".custom_carousel_image_container img"
    );
    let index = images.indexOf(imgIndex.src);
   

    if (index <= 0) {
      index = images.length - 1;
    } else {
        index--;
    }

    imgIndex.src = images[index];
  });

  document
  .querySelector(".fas.fa-chevron-right")
  .addEventListener("click", (e) => {
    let imgIndex = document.querySelector(
      ".custom_carousel_image_container img"
    );
    let index = images.indexOf(imgIndex.src);
   

    if (index >= images.length - 1) {
      index = 0;
    } else {
        index++;
    }

    imgIndex.src = images[index];
  });
