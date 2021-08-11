let countEl = document.getElementById("count-el");
let incrementButton = document.getElementById("increment-btn");
incrementButton.addEventListener("click", increment);

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

let saveEl = document.getElementById("save-el");
let saveButton = document.getElementById("save-btn");
saveButton.addEventListener("click", save);

function save() {
  let previousEntries = count + " - ";
  saveEl.textContent += previousEntries;
}

let resetCounterButton = document.getElementById("reset-counter-btn");
resetCounterButton.addEventListener("click", resetCounter);

function resetCounter() {
  countEl.textContent = 0;
  count = 0;
}

let resetAllButton = document.getElementById("reset-all-btn");
resetAllButton.addEventListener("click", resetAll);

function resetAll() {
  resetCounter();
  saveEl.textContent = "";
}
