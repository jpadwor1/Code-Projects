const currentOperand = document.getElementById("result");
const previousOperand = document.getElementById("expression");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const advancedFunctionButton = document.querySelectorAll(".advanced")
const allClear = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const equalBtn = document.getElementById("equals");

let inputString = '';
let firstNumber = null;
let secondNumber = null;
let operator = null;
let isExponentEntering = false;

// Adding event listeners to each type of button
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

equalBtn.addEventListener("click", () => {calculate();})

advancedFunctionButton.forEach(button => {
    button.addEventListener("click", () => {
        let functionName = button.textContent;
        handleAdvancedFunction(functionName);
    })
})


function appendToInput(value) {
    if (isExponentEntering) {
        secondNumber = parseFloat(value);
        inputString = firstNumber ** secondNumber;
        isExponentEntering = false;
    } else {
        inputString += value;
    }
    updateDisplay();
}

function handleOperator (clickedOperator) {
    if (inputString.includes("(") || inputString.includes("^")) {
        inputString += clickedOperator;
        updateDisplay();
    }else if (operator) {
        calculate();
    } else {
    operator = clickedOperator;
    firstNumber = parseFloat(inputString);
    inputString = '';
    updateDisplay();
    }
}

function clearInput() {
    inputString = '';
    updateDisplay();
}

function deleteLastChar() {
    inputString = inputString.slice(0,-1);
    updateDisplay();
}


function calculate() {
    let result = null;
    if (inputString.includes('^') || inputString.includes('sin') || inputString.includes('cos')) {
        result = math.evaluate(inputString);
    } else if (inputString.includes('(')) {
        result = math.evaluate(inputString);
    } else {
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
            case "/":
                result = firstNumber / secondNumber
                break;
            case "%":
                result = (firstNumber / 100) * secondNumber
                break;
            default: return
                break;
        }
    }

    inputString = result.toString();
    operator = null;
    firstNumber = null;
    updateDisplay();
}

function updateDisplay(){
    previousOperand.value = inputString;
   
    if (operator !== null) {
      currentOperand.innerText = `${firstNumber} ${operator}`;
    } else {
      currentOperand.innerText = '';
    }

}


function handleAdvancedFunction(functionName) {
    let result = null;
    firstNumber = parseFloat(inputString);

    switch (functionName) {
        case "(":
            inputString += functionName;
            updateDisplay();
            break;
        case ")":
            inputString += functionName;
            updateDisplay();
            break;
        case "√":
            result = math.sqrt(firstNumber);
            break;
        case "∛":
            result = math.cbrt(firstNumber);
            break;
        case "x²":
            result = firstNumber ** 2;
            break;
        case "x³":
            result = firstNumber ** 3;
            break;
            case "xⁿ":
                inputString += '^';
                updateDisplay();
                break;
        case "eˣ":
            result = math.e ** firstNumber;
            break;
        case "1/x":
            result = 1 / firstNumber;
            break;
        case "ln":
            result = math.log(firstNumber);
            break;
        case "log₁₀":
            result = math.log10(firstNumber);
            break;
        case "e":
            result = math.e;
            break;
        case "sin":
            inputString += "sin";
            updateDisplay();
            
            break;
        case "cos":
            inputString += "cos";
            updateDisplay();
            
            break;
        case "tan":
            result = math.tan(firstNumber);
            break;
        case "d/dx":
            let expression = prompt("Enter the expression:");
            let variable = prompt("Enter the variable:");
            result = math.derivative(expression, variable).toString();
            break;
        case "π":
            result = math.pi;
            break;
        case "10ˣ":
            result = math.pow(10, firstNumber);
            break;
        case "⁴√":
            result = math.nthRoot(firstNumber, 4);
            break;
        default:
            return;
            break;
    }

    if (result !== null) {
        inputString = result.toString();
        updateDisplay();
    }
}

