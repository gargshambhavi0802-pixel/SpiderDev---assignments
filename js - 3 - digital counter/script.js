let count = 0;

const countDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
    countDisplay.innerText = count;
}

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    if (count > 0) {
        count--;
    }
    updateDisplay();
}

function resetCounter() {
    count = 0;
    updateDisplay();
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", resetCounter);