const result = document.querySelector('.result');

let initialValue = '';

function input(number) {
  result.textContent += number;
  initialValue += number;
};

function operate(operator) {
};

function clear() {
  result.textContent = 0;
}

const operator = {
  add(x,y) {return x+y},
  subtract(x,y) {return x-y},
  multiply(x,y) {return x*y},
  divide(x,y) {return x/y},
};