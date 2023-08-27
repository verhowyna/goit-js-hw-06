function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');
btnChangeColor.addEventListener("click", onClick);
function onClick(evt) {
 const bodyColor = `#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0)}`;
  color.textContent = bodyColor;
  body.style.backgroundColor = `${bodyColor}`
}
