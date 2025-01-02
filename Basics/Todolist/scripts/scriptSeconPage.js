import { updateSliderValue, startTimer, pauseTimer, resetTimer } from './timerFunctions.js';
import { goBack } from './utilityFunctions.js';

const urlParams = new URLSearchParams(window.location.search);
const taskId = urlParams.get('task');
const todoList = JSON.parse(localStorage.getItem('todoList'));
const task = todoList[taskId];
let timerInterval;

console.log('second page', task);
document.getElementById('task-details').textContent = task.text;
document.getElementById('timer-slider').value = task.time;
document.getElementById('slider-value').textContent = (task.time / 60).toFixed(2);

document.getElementById('timer-slider').addEventListener('input', updateSliderValue);
document.getElementById('start-button').addEventListener('click', startTimer);
document.getElementById('pause-button').addEventListener('click', pauseTimer);
document.getElementById('reset-button').addEventListener('click', resetTimer);
document.getElementById('back-button').addEventListener('click', goBack);
