const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("#clockTitle");

function getTime() {
    const date = new Date();
    const month = date.getMonth();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const monthOfName = 
    ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    clockTitle.innerText = `${hours<10 ? `0${hours}`:`${hours}`}:${minutes<10?`0${minutes}`:`${minutes}`}:${seconds<10 ? `0${seconds}`:`${seconds}`} | ${monthOfName[month]}`;
}

function init() {
    //getTime();
    setInterval(getTime,1000);
}

init();