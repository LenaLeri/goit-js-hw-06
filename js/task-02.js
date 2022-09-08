const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const itemEl = document.createElement('li');
  itemEl.textContent = `${option}`;
  itemEl.classList.add('item');
  return itemEl;
});
console.log(elements);

listEl.append(...elements);
