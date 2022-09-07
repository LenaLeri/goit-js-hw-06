const categoriesEl = document.querySelector('#categories');
const numberOfCategories = categoriesEl.children.length;
console.log('Number of categories:', numberOfCategories);

const itemsEl = document.querySelectorAll('.item');

itemsEl.forEach(item => {
  const category = item.querySelector('h2');
  const elements = item.querySelectorAll('li');
  console.log(`Category: ${category.textContent}`);
  console.log(`Elemants: ${elements.length}`);
});
