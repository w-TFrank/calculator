function operate(operator, a, b) {
    if (operator === "add") {
        return a + b;
    } else if (operator === "subtract") {
        return a - b;
    } else if (operator === "multiply") {
        return a * b;
    }else if (operator === "divide") {
        return a / b;
    }
}
let buttons = document.querySelectorAll('button');
const screen = document.querySelector('#screen');
let a = null;
let b = null;
let c;
const maxLength = 9;
let operator;
buttons.forEach(function (i) {
    i.addEventListener('click', function () {
        if (this.id === "AC") {
            screen.textContent = ("");
            a = null;
            b = null;
            c = null;
        } else if (this.className === "number" && a === null){
            if (screen.textContent.length > maxLength){
                this.textContent = this.textContent.substr(0, maxLength);
            } else {
                screen.textContent += this.id.match(/\d+/);
            }
        } else if (this.className === "number" && !(a === null)){
            screen.textContent = "";
            c = null;
            b = a;
            a = null;
            if (screen.textContent.length > maxLength){
                this.textContent = this.textContent.substr(0, maxLength);
            } else {
                screen.textContent += this.id.match(/\d+/);
            }
        } else if ((a === null) && (b === null) && (this.id === "add" || "subtract" || "multiply" || "divide")) {
            operator = this.id;
            a = screen.textContent * 1;
        } else if ((a === null) && !(b === null) && (this.id === "add" || "subtract" || "multiply" || "divide")) {
            a = screen.textContent * 1;
            c = b;
            b = a;
            a = c;
            a = operate(operator, a, b);
            screen.textContent = a;
            console.log(a,b,c);
            a = screen.textContent * 1;
            b = null;
            operator = this.id;
        }
        console.log(a,b,c);
    });
});