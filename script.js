const result = document.querySelector('.result');
let operator;
let initialValue = '';
let x;
let newValue = '';

function input(number) {
  result.textContent += number;
  initialValue += number;
  newValue += number;
};

let values = [1234,4321];

function operate() {
  if (operator === '+') {
    result.textContent = Number(x) + Number(newValue);
  }
  else if (operator === '-') {
    result.textContent = Number(x) - Number(newValue);
  }
  else if (operator === '×') {
    result.textContent = Number(x) * Number(newValue);
  }
  else if (operator === '÷') {
    result.textContent = Number(x) / Number(newValue);
  }
  initialValue = result.textContent;
};

function clear() {
  result.textContent = '';
}

function operators(symbol) {
    x = initialValue;
    newValue = '';
    operator = symbol;
    result.textContent += symbol;
};