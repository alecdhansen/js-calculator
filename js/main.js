const numberButtons = document.querySelectorAll(".numberButtons");
const operationButtons = document.querySelectorAll(".operators");
const equals = document.querySelector(".equal-sign");
const displayScreen = document.querySelector(".calculator-display");
let calculation = [];
let firstNumber = "";
let operator = ""; //null
let secondNumber = "";

function pushNumber() {
  numberButtons.forEach(function (numberButton) {
    numberButton.addEventListener("click", function () {
      calculation.push(numberButton.value);
      // console.log(calculation);
      // alert(numberButton.value);
      displayScreen.innerHTML = numberButton.value;
    });
  });
}
pushNumber();

function pushOperator() {
  operationButtons.forEach(function (operationButton) {
    operationButton.addEventListener("click", function () {
      if ("C".includes(operationButton.value)) {
        calculation = [];
        displayScreen.innerHTML = "0";
      } else {
        calculation.push(operationButton.value);
        // console.log(calculation);
      }
      // alert(operationButton.value);
    });
  });
}
pushOperator();

function calculate() {
  equals.addEventListener("click", function () {
    // alert("=");
    const operators = ["+", "-", "*", "/"];
    for (let i = 0; i < calculation.length; i++) {
      const char = calculation[i];
      if (operators.includes(char)) {
        operator = char;
      } else if (firstNumber != "" && operator != "") {
        secondNumber += char;
      } else {
        firstNumber += char;
      }
    }
    let finalCalculation = evaluate(firstNumber, operator, secondNumber);
    calculation = [];
    calculation.push(finalCalculation);
    // alert(finalCalculation);
    displayScreen.innerHTML = finalCalculation;
  });
}
calculate();

function evaluate(firstNumber, operator, secondNumber) {
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  if (operator === "+") {
    return firstNumber + secondNumber;
  } else if (operator === "-") {
    return firstNumber - secondNumber;
  } else if (operator === "*") {
    return firstNumber * secondNumber;
  } else {
    return firstNumber / secondNumber;
  }
}
