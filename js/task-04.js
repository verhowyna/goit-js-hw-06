const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const initialValue = document.getElementById("value");
let counterValue = 0;
btnDecrement.addEventListener("click", function () {
    counterValue -= 1;
    initialValue.textContent = counterValue;
});
btnIncrement.addEventListener("click", function () {
    counterValue += 1;
    initialValue.textContent = counterValue;
});