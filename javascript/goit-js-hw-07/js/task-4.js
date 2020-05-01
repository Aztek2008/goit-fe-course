'use strict';

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const minusButton = document.querySelector('button[data-action="decrement"]')
  .addEventListener('click', decrementFn);
const plusButton = document.querySelector('button[data-action="increment"]')
  .addEventListener('click', incrementFn);
const counterField = document.querySelector('#value');
// .addEventListener('change', countChange);

let counterValue = 0;

function incrementFn() {
  counterValue++;
  counterField.textContent = counterValue;
  console.log('Increased!')
}

function decrementFn() {
  counterValue--;
  counterField.textContent = counterValue;
  console.table('Decreased!')
};

function countChange(e) {
  console.log('Value?');
  if (e.target === counterField.textContent) {
    console.log('Value changed!');
  }
};