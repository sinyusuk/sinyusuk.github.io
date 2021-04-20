const body = document.querySelector("body");

const IMG_NUMBER = 3;

function PaintBackgroundImg(imgMumber){
    const img = new Image();
    img.src = `img/${imgMumber+1}.jpg`
    img.classList.add("bdImage");
    body.prepend(image);
}

function genRandom(){
    const nubmer = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    PaintBackgroundImg(randomNumber);
}

init();