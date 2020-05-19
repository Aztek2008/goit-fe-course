'use strict';

let input;
let total = 0;

do {
  input = prompt('Enter the number');

  if (isNaN(input)) {
    alert("You've entered not a number, please try again!");
    continue;
  }
  total += Number(input);
} while (input !== null);

if (input === null) {
  alert(`Общая сумма чисел равна ${total}.`);
}