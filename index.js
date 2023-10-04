//javascript code
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Start";
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    document.getElementById("startStop").textContent = "Start";
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const timeDisplay = document.getElementById("display");
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    timeDisplay.textContent = formattedTime;
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}
