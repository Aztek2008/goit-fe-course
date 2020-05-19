'use strict';

let destinationCost;
let destinationCountry;
const destinationCountry1 = 'китай';
const destinationCountry2 = 'чили';
const destinationCountry3 = 'австралия';
const destinationCountry4 = 'индия';
const destinationCountry5 = 'ямайка';
const destinationCost1 = 100;
const destinationCost2 = 250;
const destinationCost3 = 170;
const destinationCost4 = 80;
const destinationCost5 = 120;
let message;


destinationCountry = prompt("Введите страну доставки").toLowerCase();

//EXPERIMENT/////////////////////////////////////////////////////

// if (destinationCountry === destinationCountry1) {
//     destinationCost === destinationCost1;
// } else if (destinationCountry === destinationCountry2) {
//     destinationCost === destinationCost2;
// } else if (destinationCountry === destinationCountry3) {
//     destinationCost === destinationCost3;
// } else if (destinationCountry === destinationCountry4) {
//     destinationCost === destinationCost4;
// } else if (destinationCountry === destinationCountry5) {
//     destinationCost === destinationCost5;
// }
//EXPERIMENT//////////////////////////////////////////////////////

switch (destinationCountry) {
    case destinationCountry1:
        destinationCost = destinationCost1;
        alert(`Доставка в ${destinationCountry} будет стоить ${destinationCost} кредитов`);
        break;
    case destinationCountry2:
        destinationCost = destinationCost2;
        alert(`Доставка в ${destinationCountry} будет стоить ${destinationCost} кредитов`);
        break;
    case destinationCountry3:
        destinationCost = destinationCost3;
        alert(`Доставка в ${destinationCountry} будет стоить ${destinationCost} кредитов`);
        break;
    case destinationCountry4:
        destinationCost = destinationCost4;
        alert(`Доставка в ${destinationCountry} будет стоить ${destinationCost} кредитов`);
        break;
    case destinationCountry5:
        destinationCost = destinationCost5;
        alert(`Доставка в ${destinationCountry} будет стоить ${destinationCost} кредитов`);
        break;
    default:
        alert("В вашей стране доставка не доступна, сорян");
}