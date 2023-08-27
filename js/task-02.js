const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const container = document.querySelector('#ingredients');
 const markup = ingredients.map(item => {
   const li = document.createElement('li');
   li.textContent = item;
   li.classList.add('item');
   return li;
 });
container.append(...markup);