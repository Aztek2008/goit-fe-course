const credits = 23580;
const pricePerDroid = 3000;
let totalDroids;
let totalPrice;

totalDroids = prompt("Купить дроидов:");

totalPrice = totalDroids * pricePerDroid;

if (totalDroids === null) {
    alert("Покупка отменена пользователем!");
} else if (totalPrice > credits) {
    alert("Недостаточно средств на счету!");
} else {
    alert(`Вы купили ${totalDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
}