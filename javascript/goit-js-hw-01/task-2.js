const total = 100;
// const ordered = 50;
let itemCount = '';

itemCount = prompt("Сколько генераторов защитного поля Вы хотите заказать?");

if (itemCount <= total) {
    alert("Заказ оформлен, с вами свяжется менеджер");
} else {
    alert("На складе недостаточно товаров!");
}