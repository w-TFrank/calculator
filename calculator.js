function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(operator, a, b) {
    if (operator === add) {
        return add(a, b);
    } else if (operator === subtract) {
        return subtract(a, b);
    } else if (operator === multiply) {
        return multiply(a, b);
    }else if (operator === divide) {
        return divide(a, b);
    }
}

let buttons = document.querySelectorAll('button');
const screen = document.querySelector('#screen');

buttons.forEach(function (i) {
    i.addEventListener('click', function () {
        if (this.className === "number"){
            screen.textContent = (this.id);
        } else if (this.id === "AC") {
            screen.textContent = ("");
        }
    });
});