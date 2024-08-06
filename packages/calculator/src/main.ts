let numA: Array<string> = [];
let numB: Array<string> = [];
let operation: string = '';
let result = 0;

function clickToArray(btn: HTMLButtonElement) {
  let value = btn.value;
  numA.push(value);
  console.log(numA);
}

function cleanNumber(num: Array<string>) {
  let numberJoint = num.join('');
  let result = parseFloat(numberJoint);
  console.log(result);
}

function sum(numA: number, numB: number) {
  let sumResult: number = numA + numB;
  let operationName = 'sum';
  return { result: sumResult, operation: operationName };
}

let buttons = document.querySelectorAll("[id^='btn']");

buttons.forEach((button) =>
  button.addEventListener('click', (event: Event) => {
    clickToArray(event.target as HTMLButtonElement);
    console.log(event);
  })
);

// Not working
// let btnDot = document.querySelector('#btnDot');
// btnDot.addEventListener('click', () => numA.push('.'));

let btnEqual = document.querySelector('#btnEqual');
btnEqual.addEventListener('click', () => cleanNumber(numA));

// function equalOperation{num1, num2, operation}
