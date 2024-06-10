// variables

let num1,num2; 
let operator;
let currentDisplayValue;
let buttonSelector = document.querySelectorAll(".calculator-btn");
let calculatorDisplay = document.querySelector("#calculator-display");
let buttonsForOperation = document.querySelectorAll(".calculator-btn-operand")


// functions for different operations

function add(num1, num2) {
    return num1 + num2;
}


function subtract(num1, num2) {
    return num1 - num2;
}


function multiply(num1, num2) {
    return num1 * num2;
}


function divide(num1, num2) {
    return num1 / num2;
}



// operate function to take numbers and operator and call operation function

function operate(num1,num2,operator) {
    if(operator == "+") {
        return add(num1,num2);
    }

    else if (operator == "-") {
        return subtract(num1,num2);
    }

    else if (operator == "*") {
        return multiply(num1,num2);
    }

    else if (operator == "/") {
        return divide(num1,num2);
    }
}




// event listeners for buttons of calculator to display on the dom and update the numbers 1 and 2 along with operator

buttonSelector.forEach(element => {
    element.addEventListener("click", function updateDisplay() {
         currentDisplayValue = calculatorDisplay.textContent = element.textContent;
         currentDisplayValue = Number(currentDisplayValue);
         num1 = currentDisplayValue;

    });
});




buttonsForOperation.forEach(element => {
    element.addEventListener("click", function updateDisplayOperandButton(){
        if(element.textContent == "+") {
            operator = "+";
        }
        
        else if (element.textContent == "-") {
            operator = "-";
        }

        else if (element.textContent == "*") {
            operator = "*";
        }


        else if (element.textContent == "/") {
            operator = "/"
        }
        
    });
})






