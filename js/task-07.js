const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', handleFontSizeChange);

function handleFontSizeChange(event) {
  const fontSize = event.currentTarget.value;
  textEl.style.fontSize = `${fontSize}px`;
}
