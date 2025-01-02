export function updateSliderValue() {
    const sliderValue = document.getElementById('timer-slider').value;
    document.getElementById('slider-value').textContent = (sliderValue / 60).toFixed(2);
    task.time = sliderValue; // Store timer value in seconds
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

export function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    document.getElementById('timer-slider').disabled = true;
    timerInterval = setInterval(() => {
        if (task.time > 0) {
            task.time--;
            document.getElementById('slider-value').textContent = (task.time / 60).toFixed(2);
            document.getElementById('timer-slider').value = task.time;
            localStorage.setItem('todoList', JSON.stringify(todoList));
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
}

export function pauseTimer() {
    if (timerInterval) clearInterval(timerInterval);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    console.log(todoList);
}

export function resetTimer() {
    if (timerInterval) clearInterval(timerInterval);
    task.time = 0;
    document.getElementById('timer-slider').disabled = false;
    document.getElementById('timer-slider').value = 0;
    document.getElementById('slider-value').textContent = 0;
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
