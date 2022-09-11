let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

decrementBtn.addEventListener('click', handleDecrementBtnClick);

function handleDecrementBtnClick(event) {
  counterValue -= 1;
  counter.textContent = counterValue;
}

incrementBtn.addEventListener('click', handleIncrementBtnClick);

function handleIncrementBtnClick(event) {
  counterValue += 1;
  counter.textContent = counterValue;
}
