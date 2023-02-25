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
    initialValue = Number(x) + Number(newValue);
  }
  else if (operator === '-') {
    initialValue = Number(x) - Number(newValue);
  }
  else if (operator === '×') {
    if (newValue === '') {
      newValue = '1';
    }
    initialValue = Number(x) * Number(newValue);
  }
  else if (operator === '÷') {
    if (newValue === '') {
      newValue = '1';
    }
    initialValue = Number(x) / Number(newValue);
  }
  initialValue = Math.round(initialValue * 100) / 100;
  x = initialValue;
  newValue = '';
  result.textContent = initialValue;
};

function clear() {
  x = '';
  initialValue = '';
  newValue = '';
  operator = '';
  result.textContent = '';
};

function correct() {
  if (result.textContent.slice(result.textContent.length-1) == operator) {
    operator = '';
  }
  else {
    initialValue = initialValue.slice(0,-1);
    newValue = newValue.slice(0,-1);
  }
  result.textContent = result.textContent.slice(0,-1);
};

function operators(symbol) {
  operate();
  operator = symbol;
  newValue = '';
  x = initialValue;
  result.textContent += symbol;
};

function percent() {
  if (!operator) {
    initialValue = Number(initialValue)/100;
    result.textContent = initialValue;
  }
  else {
    newValue = Number(newValue)/100;
    result.textContent = `${x}${operator}${newValue}`
  }
};

function decimal() {
  result.textContent += '.';
  if (!initialValue.includes('.')) {
    initialValue += '.';    
  }
  if (!newValue.includes('.')) {
    newValue += '.';    
  }
};

// keyboard

window.addEventListener ('keydown', (e) => {
  // numbers

  if (e.key == Number(e.key)) {
    input(e.key);
  }

  // operators
  
  switch(e.key) {
    case '+':
      operators('+');
    break;

    case '-':
      operators('-');
    break;

    case '*':
      operators('×');
    break;

    case '/':
      operators('÷');
    break;
  }

  // others

  switch(e.key) {
    case 'Escape':
      clear();
    break;

    case 'Backspace':
      correct();
    break;

    case 'Enter':
      operate();
    break;

    case '=':
      operate();
    break;

    case '%':
      percent();
    break;

    case '.':
      decimal();
    break;
  }
});