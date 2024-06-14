// Variables

let finalAns, num1, num2, operator, currentDisplayValue, isOperationButtonClicked;
let buttonSelector = document.querySelectorAll(".calculator-btn");
let calculatorDisplay = document.querySelector("#calculator-display");
let buttonsForOperation = document.querySelectorAll(".calculator-btn-operand") 
let equalToButton = document.querySelector(".calculator-btn-equal-to");
let acButtonSelector = document.querySelector(".ac-btn");
let dotBtnSelector = document.querySelectorAll(".dot-btn");


// functions for different arithmetic operations

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

let operateFunctionExpression = function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    }

    else if (operator == "-") {
        return subtract(num1, num2);
    }

    else if (operator == "*") {
        return multiply(num1, num2);
    }

    else if (operator == "/") {
        return divide(num1, num2);
    }
}




// event listeners for buttons of calculator to display on the dom and update the numbers 1 and 2 along with operator

buttonSelector.forEach(element => {
    element.addEventListener("click", function updateDisplay() {

        currentDisplayValue = calculatorDisplay.textContent + element.textContent;
        calculatorDisplay.textContent = currentDisplayValue;


        currentDisplayValue = Number(currentDisplayValue);


        if (isOperationButtonClicked) {
            num2 = currentDisplayValue;
        }

        else if (!isOperationButtonClicked) {
            num1 = currentDisplayValue;
        }
    });
});



// event listener for arithmetic operation button

buttonsForOperation.forEach(element => {

    element.addEventListener("click", () => {

        if (!num2) {
            calculatorDisplay.textContent = ""
        }

        else {
            calculatorDisplay.textContent = ""
            num1 = operateFunctionExpression(num1, num2, operator);
            num2 = undefined;

        }
        operator = element.textContent;
        isOperationButtonClicked = true;

    });
})



// event listener for equal to button to calculate final answer and round it if it contains a decimal point.
// added a funny youtube video redirect (out of the scope of syllabus) when user divides a number by 0 XD

equalToButton.addEventListener("click", () => {
    if (operator === '/' && num2 === 0) {
        window.open('https://www.youtube.com/embed/FEmxJoBLKws?autoplay=1', '_blank');
    } else {
        finalAns = operateFunctionExpression(num1, num2, operator);
        if(num1 % 1 == 0 && num2 % 1 == 0) {
            calculatorDisplay.textContent = finalAns;
        }
        else if (num1 %1 != 0 || num2 % 1 != 0) {
            calculatorDisplay.textContent = finalAns.toFixed(1);
        } 
    }
});




// event listener for ac (reset) button which resets the numbers , operators , and essential booleans

acButtonSelector.addEventListener("click", () => {
    num1 = 0;
    num2 = 0;
    operator = "undefined"
    isOperationButtonClicked = false;
    calculatorDisplay.textContent = "";

})



// event listener for the dot (.) button to allow only one decimal point and manipulate the dom (display) with dot.

dotBtnSelector.forEach((element) => {
    element.addEventListener("click", () => {
        
        if (calculatorDisplay.textContent.includes(".")) {
            return;
        }
        else {
            console.log("its working");
            calculatorDisplay.textContent += element.textContent;
    }
    });
});

