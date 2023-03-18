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
console.log(operate(add, 2, 2));
console.log(operate(subtract, 2, 2));
console.log(operate(multiply, 2, 2));
console.log(operate(divide, 2, 2));