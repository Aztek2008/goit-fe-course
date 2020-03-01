const calculateEngravingPrice = function (message, pricePerWord) {
  const wordsToPay = message.split(' ');
  console.log(wordsToPay);
  let total = wordsToPay.length * pricePerWord;

  return `Total engravity price: ${total} dineros`;
};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120