'use strict';

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingridientsList = document.querySelector('ul#ingredients');

const stringOfLi = ingredients
    .map(ingridient => document
        .createElement('li').textContent = `<li>${ingridient}</li>`)
    .join('');

const result = ingridientsList.insertAdjacentHTML('afterbegin', stringOfLi);

console.log(ingridientsList);