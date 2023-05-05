const currentOperand = document.getElementById("currentOperand");
const previousOperand = document.getElementById("previousOperand");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const allClear = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const equalBtn = document.getElementById("equals");

let inputString = '';
let firstNumber = null;
let secondNumber = null;
let operator = null;

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
      appendToInput(button.textContent);
    })
  })

  operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (button.textContent !== "AC" && button.textContent !== "DEL" && button.textContent !== "=") {
        handleOperator(button.textContent);
      }
    })
  })

deleteBtn.addEventListener("click", () => {deleteLastChar();});

allClear.addEventListener("click", () => {clearInput();});

equalBtn.addEventListener("click", () => {
    calculate();
})

function appendToInput(value) {
    inputString += value;
    updateDisplay();
}

function handleOperator (clickedOperator) {
    if (operator) {
        calculate();
    }
    operator = clickedOperator;
    firstNumber = parseFloat(inputString);
    inputString = '';
    updateDisplay();
}

function clearInput() {
    inputString = '';
    updateDisplay();
}

function deleteLastChar() {
    inputString = inputString.slice(0,-1);
    updateDisplay();
}

function calculate (){
    let result = 'null';
    secondNumber = parseFloat(inputString);
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber
            break;
        case "-":
            result = firstNumber - secondNumber
            break;
        case "*":
            result = firstNumber * secondNumber
            break;
        case "&#xf7;":
            result = firstNumber / secondNumber
            break;
        default: return
            break;
    }

   inputString = result.toString();
   operator = null;
   firstNumber = null;
    updateDisplay();
}

function updateDisplay(){
    currentOperand.innerText = inputString;

    if (operator !== null) {
      previousOperand.innerText = `${firstNumber} ${operator}`;
    } else {
      previousOperand.innerText = '';
    }

}
