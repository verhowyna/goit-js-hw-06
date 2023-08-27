const slider = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');
function handler(evt) {
   textSize.style.fontSize = `${evt.currentTarget.value}px`;
   }
slider.addEventListener('input', handler);
