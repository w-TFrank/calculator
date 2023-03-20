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
    if (operator === "add") {
        return add(a, b);
    } else if (operator === "subtract") {
        return subtract(a, b);
    } else if (operator === "multiply") {
        return multiply(a, b);
    }else if (operator === "divide") {
        return divide(a, b);
    }
}

let buttons = document.querySelectorAll('button');
const screen = document.querySelector('#screen');
let displayValue = [null, null];
let operator;

buttons.forEach(function (i) {
    i.addEventListener('click', function () {
        const maxLength = 9;
        if (this.className === "number"){
            if (screen.textContent.length > maxLength){
                this.textContent = this.textContent.substr(0, maxLength);
            } else {
                screen.textContent += this.id.match(/\d+/);
            }
        } else if (this.id === "AC") {
            screen.textContent = ("");
            displayValue = [null, null];
        } else if (this.id === "add") {
            operator = "add";
            if (displayValue[0] === null) {
                displayValue[0] = screen.textContent * 1;
                screen.textContent = "";
            }
        } else if (this.id === "subtract") {
            operator = "subtract";
            if (displayValue[0] === null) {
                displayValue[0] = screen.textContent * 1;
                screen.textContent = "";
            }
        } else if (this.id === "multiply") {
            operator = "multiply";
            if (displayValue[0] === null) {
                displayValue[0] = screen.textContent * 1;
                screen.textContent = "";
            }
        } else if (this.id === "divide") {
            operator = "divide";
            if (displayValue[0] === null) {
                displayValue[0] = screen.textContent * 1;
                screen.textContent = "";
            }
        } else if (this.id === "equals") {
             if (!(displayValue[0] === null)) {
                displayValue[1] = screen.textContent * 1;
                console.log(displayValue);
                screen.textContent = operate(operator, displayValue[0], displayValue[1]);
                displayValue[0] = null; 
             }
        }
    });
});