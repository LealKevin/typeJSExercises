let numCurrent: Array<string> = [];
let numA: number = 0;
let numB: number = 0;
let operation: string = '';
let result = 0;

const display = document.querySelector('#display');
display.textContent = '';

// Input on screen
function numToScreen(numCurrent) {
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

function numberToArray(num: Number) {
  let result = String(num).split('').map(String);
  return result;
}

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

function division(numA: number, numB: number) {
  display.textContent = '';
  return numA / numB;
}

// Gives the buttons an addEventListener to run clickToArray() on each click
let buttons = document.querySelectorAll("[id^='btn']");
buttons.forEach((button) =>
  button.addEventListener('click', (event: Event) => {
    clickToArray(event.target as HTMLButtonElement);
  })
);

let btnEqual = document.querySelector('#btnEqual');
btnEqual.addEventListener('click', equalOperation);

let btnSum = document.querySelector('#btnSum');
btnSum.addEventListener('click', () => {
  numA = cleanNumber(numCurrent);
  numCurrent.length = 0;
  operation = 'sum';
  console.log(numA, numB, numCurrent);
});

let butSub = document.querySelector('#btnSub');
butSub.addEventListener('click', () => {
  numA = cleanNumber(numCurrent);
  numCurrent.length = 0;
  operation = 'sub';
});

let btnDiv = document.querySelector('#btnDiv');
btnDiv.addEventListener('click', () => {
  numA = cleanNumber(numCurrent);
  numCurrent.length = 0;
  operation = 'division';
});

function equalOperation() {
  numB = cleanNumber(numCurrent);
  if (operation === 'sum') {
    let result = sum(numA, numB);
    display.textContent = result.toString();
    numB = 0;
    numA = 0;
    numCurrent = numberToArray(result);
    return result;
  } else if (operation === 'sub') {
    let result = substracion(numA, numB);
    display.textContent = result.toString();
  } else if (operation === 'division') {
    let result = division(numA, numB);
    display.textContent = result.toString();
  }
}

let btnAC = document.querySelector('#btnAC');
btnAC.addEventListener('click', cleanHistory);

function cleanHistory() {
  numCurrent.length = 0;
  numA = 0;
  numB = 0;
  operation = '';
  display.textContent = '';
}
