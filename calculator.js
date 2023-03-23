function operate(operator, a, b) {
    if (operator === "add") {
        return a + b;
    } else if (operator === "subtract") {
        return a - b;
    } else if (operator === "multiply") {
        return a * b;
    } else if (operator === "divide") {
        return a / b;
    }
}
let buttons = document.querySelectorAll('button');
const screen = document.querySelector('#screen');
let a = null;
let b = null;
let c;
let operator;
buttons.forEach(function (i) {
    const maxLength = 9;
    i.addEventListener('click', function () {
        if (this.id === "AC") {//clears screen and calculating variables
            screen.textContent = ("");
            a = null;
            b = null;
            c = null;
        } 
            /*
                creates the # on the screen and stops user from entering
                a number that is too long
            */
         
        else if (this.className === "number" && a === null){
            if (screen.textContent.length > maxLength){
                this.textContent = this.textContent.substr(0, maxLength);
            } else {
                screen.textContent += this.id.match(/\d+/);
            }
        }   
            /*
                creates the # on the screen after the first variable has been stored
                (so the next number that is inputted onto the screen can be saved into
                a different variable). if a new number is inputted after = has been hit,
                variables reset so a new calculation can start.
            */

        else if (this.className === "number" && !(a === null)){
            if ((c != null) && (operator === "equals")) {
                //for if typing in new # after = has already calculated something
                screen.textContent = "";
                screen.textContent += this.id.match(/\d+/);
                a = null;
                b = null;
                c = null;
            } else {
                screen.textContent = "";
                c = null;
                b = a;
                a = null;
                screen.textContent += this.id.match(/\d+/);
            }
        }   
            /*
                stores the operator that has been clicked on, and saves what was
                on the screen when the operator was clicked
            */

        else if ((a === null) && (b === null)) {
            operator = this.id;
            a = screen.textContent * 1;
        } 
            /*
                calculates what should be on the screen by using the two stored
                variables. stores that number and deletes the others
                so calculations can continue. limits the possible length of the 
                answer and rounds long decimals to 3 decimal places
            */

        else if (((a === null) && !(b === null))) {
            a = screen.textContent * 1;
            c = b;
            b = a;
            a = c;
            a = operate(operator, a, b);
            if (a.toString().length > maxLength) {
                if (a.toFixed(3).toString().length > maxLength) {
                    screen.textContent = ("number too big");
                } else {
                    screen.textContent = a.toFixed(3);
                    a = screen.textContent * 1;
                }
            } else {
                screen.textContent = a;
                a = screen.textContent * 1;
            }
            b = null;
            operator = this.id;
        } 
            /*
                stores the operator clicked after = has been pressed, so
                calculations can continue
            */

        else if (!(a === null)) {
            operator = this.id;
        }
    });
});