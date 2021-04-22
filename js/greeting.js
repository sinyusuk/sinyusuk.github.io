const USER_LS = "currentUser",
SHOWING_CN = "showing";

const form = document.querySelector('.form'),
input = form.querySelector('input'),
greeting = document.querySelector(".greeting");

function saveName(name){
    localStorage.setItem(USER_LS,name);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);

}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);/*.showing 즉 display:block을 없앰 */ 
  greeting.classList.add(SHOWING_CN);/*display:block을 다시 추가*/
  greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }

}



function init(){
    loadName();
}
init();