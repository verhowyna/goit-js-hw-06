const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', handler)
function handler(evt) {
    const symbolLength = evt.currentTarget.value.length;
    if (symbolLength === Number(evt.currentTarget.dataset.length)) {
        evt.currentTarget.classList.remove('invalid');
        evt.currentTarget.classList.add('valid');
    } else {
        evt.currentTarget.classList.remove('valid');
        evt.currentTarget.classList.add('invalid');
    }
}