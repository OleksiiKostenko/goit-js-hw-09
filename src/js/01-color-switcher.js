
const startBtnEL = document.querySelector('[data-start]');
const stopBtnEL = document.querySelector('[data-stop]');
const bodyColorEl = document.querySelector('body');
let timerId = null;

startBtnEL.addEventListener('click', startColorChange);
stopBtnEL.addEventListener('click', stopColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function startColorChange() {
    timerId = setInterval(() => {
        stopBtnEL.style.backgroundColor = '#ff0000';
        startBtnEL.style.backgroundColor = '';
        bodyColorEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
        startBtnEL.disabled = true;
};

function stopColorChange() {
    clearInterval(timerId);
    stopBtnEL.style.backgroundColor = '';
    startBtnEL.style.backgroundColor = '#018f04';
    startBtnEL.disabled = false;
}


