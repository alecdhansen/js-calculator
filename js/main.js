const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equals = document.querySelector("[data-equals]");
const allClear = document.querySelector("[data-all-clear]");
const displayScreen = document.querySelector("[data-display-screen]");

numberButtons.forEach(function (numberButton) {
  console.log(numberButton);
});

operationButtons.forEach(function (operationButton) {
  console.log(operationButton);
});

equals.addEventListener("click", function () {
  alert("=");
});
allClear.addEventListener("click", function () {
  alert("A/C");
});
