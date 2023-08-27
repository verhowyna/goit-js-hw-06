const list = document.querySelectorAll('.item');
console.dir(`Number of categories: ${list.length}`);
const category = document.querySelectorAll('h2');
category.forEach(item => console.dir(`Category: ${item.textContent}\nElements: ${item.nextElementSibling.children.length}`));