function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorCode = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');

changeColorBtn.addEventListener('click', handleChangeClick);

function handleChangeClick() {
  const color = getRandomHexColor();
  colorCode.textContent = color;
  bodyColor.style.backgroundColor = color;
}
