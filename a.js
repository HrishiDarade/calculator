let equation = '';

function updateDisplay(value) {
  equation += value;
  document.getElementById('display').value = equation;
}

function clearDisplay() {
  equation = '';
  document.getElementById('display').value = equation;
}

function calculate() {
  let result = eval(equation);
  equation = result.toString();
  document.getElementById('display').value = equation;
}
