const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');
inputText.addEventListener('input', onInput);
function onInput(evt) {
    const inputValue = evt.currentTarget.value.trim();
    outputText.textContent = inputValue !== '' ? inputValue : 'Anonymous';
}