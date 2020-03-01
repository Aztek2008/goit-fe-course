let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Enter the number...');
  if (isNaN(input)) {
    alert(`You've entered not a number, please try again!`);
    continue;
  }
  if (input === null) {
    for (const number of numbers) {
      total += Number(number);
    }
    console.log(`Final array is: [${numbers}]`);
    console.log(`Total sum is ${total}!`);
    break;
  }
  numbers.push(input);
}
