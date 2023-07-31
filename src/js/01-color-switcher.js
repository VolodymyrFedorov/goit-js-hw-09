const refs = {
    startBtn: document.querySelector('[data-start]'),
    closeBtn: document.querySelector('[data-stop]'),
    bodyEl: document.querySelector('body')
};

let intervalId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

refs.startBtn.addEventListener('click' , changeBg);
refs.closeBtn.addEventListener('click', stoppingChange);

function changeBg() {
    refs.startBtn.disabled = true;
    refs.closeBtn.disabled = false;
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
    intervalId = setInterval(() => {
        refs.bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
};

function stoppingChange() {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
    refs.closeBtn.disabled = true
};