'use strict';

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const downButton = document.querySelector('#counter button[data-action="decrement"]')
  .addEventListener('click', decrementFn);
const upButton = document.querySelector('#counter button[data-action="increment"]')
  .addEventListener('click', incrementFn);
const counterField = document.querySelector('#counter > #value');

let counterValue = 0;


function incrementFn() {
  counterValue++;
  counterField.textContent = counterValue;
  this.addEventListener('click', () => {
    console.log('Increased!')
  });
}

function decrementFn() {
  counterValue--;
  counterField.textContent = counterValue;
  this.addEventListener('click', () => {
    console.table('Decreased!')
  });
}

counterField.addEventListener('change', () => {
  console.log('Value changed!');
});