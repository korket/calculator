const result = document.querySelector('.result');
const allClear = document.querySelector('.clear');
allClear.addEventListener('click', () => clear());

let initialValue = '';
let newValue = '';
let operator;
let x;

function input(number) {
  result.textContent += number;
  initialValue += number;
  newValue += number;
};

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
  x = '';
  initialValue = '';
  newValue = '';
  operator = '';
  result.textContent = '';
};

function operators(symbol) {
  x = initialValue;
  newValue = '';
  operator = symbol;
  result.textContent += symbol;
};