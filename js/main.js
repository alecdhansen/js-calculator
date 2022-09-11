const numberButtons = document.querySelectorAll(".numberButtons");
const operationButtons = document.querySelectorAll(".operators");
const equals = document.querySelector(".equal-sign");
const displayScreen = document.querySelector(".calculator-display");
let calculation = [];
let firstNumber = "";
let operator = "";
let secondNumber = "";

function pushNumber() {
  numberButtons.forEach(function (numberButton) {
    numberButton.addEventListener("click", function () {
      calculation.push(numberButton.value);
      console.log(calculation);
      alert(numberButton.value);
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
        console.log(calculation);
      }
      alert(operationButton.value);
    });
  });
}
pushOperator();

// if operatoin button = C, do someting special

function calculate() {
  equals.addEventListener("click", function () {
    alert("=");
    for (let i = 0; i < calculation.length; i++) {
      if ("+-*/".includes(calculation[i])) {
        operator = calculation[i];
      } else if (firstNumber != "" && operator != "") {
        secondNumber += calculation[i];
      } else {
        firstNumber += calculation[i];
      }
    }
    let finalCalculation = evaluate(firstNumber, operator, secondNumber);
    calculation = [];
    calculation.push(finalCalculation);
    alert(finalCalculation);
    displayScreen.innerHTML = finalCalculation;
  });
}
calculate();

function evaluate(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    return parseInt(firstNumber) + parseInt(secondNumber);
  } else if (operator === "-") {
    return parseInt(firstNumber) - parseInt(secondNumber);
  } else if (operator === "*") {
    return parseInt(firstNumber) * parseInt(secondNumber);
  } else {
    return parseInt(firstNumber) / parseInt(secondNumber);
  }
}
