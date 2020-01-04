const body = document.querySelector("body");

const IMG_NUM = 3;

function handleImgLoad(){
    console.log('finished loading');
}

function paintImage(imgNum) {
  const image = new Image();
  image.src = `images/${imgNum + 1}.jpg`;
  image.classList.add('bgImage');
  body.prepend(image);
}

function genRan() {
  const num = Math.floor(Math.random() * IMG_NUM);
  return num;
}

function init() {
  const randomNum = genRan();
  paintImage(randomNum);
}

init();
