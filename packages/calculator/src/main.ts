let numA: Array<string> = [];
let numB = [];
let result = 0;

function clickToArray(btn: HTMLButtonElement) {
  let value = btn.value;
  numA.push(value);
  console.log(numA);
}

function cleanNumber(num: Array<string>) {
  return num.join('');
}

function sum(numA: number, numB: number) {
  return numA + numB;
}

let btn = document.querySelectorAll('#btn');

btn.forEach((item) =>
  item.addEventListener('click', (btn2: Event) =>
    clickToArray(btn2.target as HTMLButtonElement)
  )
);
