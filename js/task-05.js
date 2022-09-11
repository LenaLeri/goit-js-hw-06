const inputEl = document.querySelector('#name-input');
const nameLableEl = document.querySelector('#name-output');

inputEl.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  const { value } = event.target;
  nameLableEl.textContent = value ? value : 'Anonymous';
}
