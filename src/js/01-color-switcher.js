const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

start.addEventListener('click', onStartBtnClick);
stop.addEventListener('click', onStopBtnClick);

let intervalId = null;

function onStartBtnClick() {
    body.style.backgroundColor = getRandomHexColor();

    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
    start.disabled = true;
    stop.disabled = false;
};

function onStopBtnClick() {
    clearInterval(intervalId);
    start.disabled = false;
    stop.disabled = true;
};


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};