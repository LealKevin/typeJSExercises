let numCurrent: Array<string> = [];
let numA: number = 0;
let numB: number = 0;
let operation: string = '';
let result = 0;

function clickToArray(btn: HTMLButtonElement) {
  let value = btn.value;
  numCurrent.push(value);
  console.log(numCurrent);
}

function cleanNumber(num: Array<string>) {
  let numberJoint = num.join('');
  let result = parseFloat(numberJoint);
  return result;
}

function sum(numA: number, numB: number) {
  let sumResult: number = numA + numB;

  return sumResult;
}

let buttons = document.querySelectorAll("[id^='btn']");

buttons.forEach((button) =>
  button.addEventListener('click', (event: Event) => {
    clickToArray(event.target as HTMLButtonElement);
    console.log(event);
  })
);

let btnEqual = document.querySelector('#btnEqual');
btnEqual.addEventListener('click', equalOperation);

let btnSum = document.querySelector('#btnSum');
btnSum.addEventListener('click', () => {
  numA = cleanNumber(numCurrent);

  numCurrent.length = 0;
  operation = 'sum';
  console.log(numA);
});

function equalOperation() {
  numB = cleanNumber(numCurrent);
  if (operation === 'sum') {
    let result = sum(numA, numB);
    console.log(result);
  }
}
