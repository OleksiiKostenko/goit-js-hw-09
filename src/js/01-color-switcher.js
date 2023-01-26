
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const setBodyColor = document.querySelector('body');
let timerId = null;

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function startColorChange() {
    timerId = setInterval(() => {
        stopBtn.style.backgroundColor = '#ff0000';
        startBtn.style.backgroundColor = '';
        setBodyColor.style.backgroundColor = getRandomHexColor();
    }, 1000);
        startBtn.disabled = true;
};

function stopColorChange() {
    clearInterval(timerId);
    stopBtn.style.backgroundColor = '';
    startBtn.style.backgroundColor = '#018f04';
    startBtn.disabled = false;
}


