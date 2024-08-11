let startTime, elapsedTime = 0, timerInterval;
let running = false;
const display = document.getElementById('display');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');

const laps = document.getElementById('laps');
function timeToString(time) {
let diffInHrs = time / 3600000;
let hh = Math.floor(diffInHrs);
let diffInMin = (diffInHrs - hh) * 60;
let mm = Math.floor(diffInMin);
let diffInSec = (diffInMin - mm) * 60;
let ss = Math.floor(diffInSec);
let formattedHH = hh.toString().padStart(2, "0");
let formattedMM = mm.toString().padStart(2, "0");
let formattedSS = ss.toString().padStart(2, "0");
return `${formattedHH}:${formattedMM}:${formattedSS}`;
}
function start() {
startTime = Date.now() - elapsedTime;
timerInterval = setInterval(function() {
elapsedTime = Date.now() - startTime;
display.textContent = timeToString(elapsedTime);
}, 1000);
startPauseBtn.textContent = "Pause";
}
function pause() {
clearInterval(timerInterval);
startPauseBtn.textContent = "Start";
}
function reset() {
clearInterval(timerInterval);
display.textContent = "00:00:00";
elapsedTime = 0;
startPauseBtn.textContent = "Start";
laps.innerHTML = "";
}
function lap() {
const lapTime = timeToString(elapsedTime);
const lapElement = document.createElement('div');

lapElement.className = 'lap';
lapElement.textContent = lapTime;
laps.appendChild(lapElement);
}
startPauseBtn.addEventListener('click', function() {
if (running) {
pause();
} else {
start();
}
running = !running;
});
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);