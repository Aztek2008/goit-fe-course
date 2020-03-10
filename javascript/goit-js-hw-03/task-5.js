'use strict';

const products = [{
    name: 'Радар',
    price: 1300,
    quantity: 4
  },
  {
    name: 'Сканер',
    price: 2700,
    quantity: 3
  },
  {
    name: 'Дроид',
    price: 400,
    quantity: 7
  },
  {
    name: 'Захват',
    price: 1200,
    quantity: 2
  },
];

const getAllPropValues = function (arr, prop) {
  const arrayOfProps = [];

  for (let i = 0; i < products.length; i += 1) {
    const productObj = arr[i];

    for (const key in productObj) {
      if (key === prop) {
        arrayOfProps.push(productObj[key]);
      }
    }
  }
  return arrayOfProps;
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []