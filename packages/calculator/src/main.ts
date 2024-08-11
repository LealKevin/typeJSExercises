let numCurrent: Array<string> = [];
let numA: number = 0;
let numB: number = 0;
let operation: string = '';
let result = 0;
let dotPressed = 0;

const display = document.querySelector('#display');
display.textContent = '';

// Input on screen
function numToScreen(numCurrent: Array<string>) {
  let numCleanDisplay = numCurrent.join('');
  display.textContent = numCleanDisplay;
}

// Store number on array
function clickToArray(btn: HTMLButtonElement) {
  let value = btn.value;
  numCurrent.push(value);
  numToScreen(numCurrent);
}

// Convert array of strings to a number
function cleanNumber(num: Array<string>) {
  let numberJoint = num.join('');
  let result = parseFloat(numberJoint);
  return result;
}

// Convert number to array of strings
function numberToArray(num: Number) {
  let result = String(num).split('').map(String);
  return result;
}

//Check if the '.' is already present
let btnDot = document.querySelector('#dotBtn');
btnDot.addEventListener('click', (event) => {
  while (dotPressed === 0) {
    clickToArray(event.target as HTMLButtonElement);
    dotPressed = 1;
  }
  dotPressed = 1;
});

// Function that make the sum
function sum(numA: number, numB: number) {
  display.textContent = '';
  let sumResult: number = numA + numB;
  return sumResult;
}

// Function that make the substraction
function substracion(numA: number, numB: number) {
  display.textContent = '';
  return numA - numB;
}

// Function that make the division
function division(numA: number, numB: number) {
  display.textContent = '';
  if (numB === 0 || numA === 0) {
    display.textContent = 'Error';
  }
  return numA / numB;
}

// Function that make the multiplication
function multiplication(numA: number, numB: number) {
  display.textContent = '';
  return numA * numB;
}

// Gives the buttons an addEventListener to run clickToArray() on each click
let buttons = document.querySelectorAll("[id^='btn']");
buttons.forEach((button) =>
  button.addEventListener('click', (event: Event) => {
    clickToArray(event.target as HTMLButtonElement);
  })
);

// Button Equal
let btnEqual = document.querySelector('#btnEqual');
btnEqual.addEventListener('click', equalOperation);

// Button Sum
let btnSum = document.querySelector<HTMLElement>('#btnSum');
btnSum.addEventListener('click', () => {
  btnSum.style.backgroundColor = '#e79315';
  numA = cleanNumber(numCurrent);
  numCurrent.length = 0;
  dotPressed = 0;
  operation = 'sum';
  console.log(numA, numB, numCurrent);
});

// Button Substraction
let btnSub = document.querySelector<HTMLElement>('#btnSub');
btnSub.addEventListener('click', () => {
  btnSub.style.backgroundColor = '#e79315';
  numA = cleanNumber(numCurrent);
  numCurrent.length = 0;
  dotPressed = 0;
  operation = 'sub';
  console.log(numA, numB, numCurrent);
});

// Button Division
let btnDiv = document.querySelector<HTMLElement>('#btnDiv');
btnDiv.addEventListener('click', () => {
  btnDiv.style.backgroundColor = '#e79315';
  numA = cleanNumber(numCurrent);
  numCurrent.length = 0;
  dotPressed = 0;
  operation = 'division';
  console.log(numA, numB, numCurrent);
});

// Button Multiplication
let btnMultiplication = document.querySelector<HTMLElement>('#btnMult');
btnMultiplication.addEventListener('click', () => {
  btnMultiplication.style.backgroundColor = '#e79315';
  numA = cleanNumber(numCurrent);
  dotPressed = 0;
  numCurrent.length = 0;
  operation = 'multiplication';
});

// Toogle positive / negative
let btnMinusPlus = document.querySelector('#minusPlusBtn');
btnMinusPlus.addEventListener('click', () => {
  if (numCurrent[0] === '-') {
    numCurrent.shift();
    numToScreen(numCurrent);
  } else {
    numCurrent.unshift('-');
    numToScreen(numCurrent);
  }
});

//Check result length
function checkResultLength(result: number) {
  let resultConvert = result.toString();
  if (resultConvert.length < 12) {
    return resultConvert;
  } else {
    return result.toExponential(5).toString();
  }
}

// Function when equal is pressed
function equalOperation() {
  numB = cleanNumber(numCurrent);
  dotPressed = 0;
  if (operation === 'sum') {
    //Sum
    btnSum.style.backgroundColor = '#919191';
    let result = sum(numA, numB);
    display.textContent = checkResultLength(result);
    numB = 0;
    numA = 0;
    numCurrent = numberToArray(result);
    return result;
  } else if (operation === 'sub') {
    //SuB
    btnSub.style.backgroundColor = '#919191';
    let result = substracion(numA, numB);
    display.textContent = checkResultLength(result);
    numB = 0;
    numA = 0;
    numCurrent = numberToArray(result);
    return result;
  } else if (operation === 'division') {
    //Division
    btnDiv.style.backgroundColor = '#919191';
    let result = division(numA, numB);
    if (result === Infinity) {
      display.textContent = 'Error';
    } else {
      display.textContent = checkResultLength(result);
      numB = 0;
      numA = 0;
      numCurrent = numberToArray(result);
      return result;
    }
  } else if (operation === 'multiplication') {
    //Multiplication
    btnMultiplication.style.backgroundColor = '#919191';
    let result = multiplication(numA, numB);
    display.textContent = checkResultLength(result);
    numB = 0;
    numA = 0;
    numCurrent = numberToArray(result);
  }
}

// Button AC, empty all data stored on variables
let btnAC = document.querySelector('#btnAC');
btnAC.addEventListener('click', cleanHistory);

function cleanHistory() {
  numCurrent.length = 0;
  numA = 0;
  numB = 0;
  operation = '';
  dotPressed = 0;
  display.textContent = '';
}
