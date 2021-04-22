const body = document.querySelector("html");

//const IMG_NUMBER = 2;

function PaintBackgroundImg(){
    const img = new Image();
    img.src = `img/1.jpg`
    img.classList.add("bdImage");
    //body.prepend(img);
    body.style.setProperty('background-image',`url("${img.src}")`) 

}


function init(){
    // const randomNumber = genRandom();
    PaintBackgroundImg();
}

init();