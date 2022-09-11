const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', inputBlur);

function inputBlur(event) {
  const { value } = event.target;
  const requiredLength = Number(inputEl.dataset.length);

  if (requiredLength === value.length) {
    classChange('valid', 'invalid');
  } else {
    classChange('invalid', 'valid');
  }
}

function classChange(addClass, removeClass) {
  inputEl.classList.add(addClass);
  inputEl.classList.remove(removeClass);
}
