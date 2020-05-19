const formatString = function (string) {
  console.log('String length: ' + string.length);
  const stringMaxLength = 40;
  const splittedString = string.split('');
  let joinedStringInRange = '';

  if (splittedString.length > stringMaxLength) {
    joinedStringInRange = splittedString.splice(0, 40);
    joinedStringInRange.push('...');
  } else {
    joinedStringInRange = splittedString.splice(0);
  }

  return joinedStringInRange.join('');

}

console.log(formatString('Curabitur ligula sapien, tincidunt non.')); // вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')); // вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.')); // вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.')); // вернется форматированная строка