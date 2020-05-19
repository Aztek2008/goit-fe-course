'use strict';

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');

inputField.addEventListener('input', (event) => {
    if (inputField.value !== '') {
        outputField.textContent = event.currentTarget.value;
    } else {
        outputField.insertAdjacentText('afterbegin', 'незнакомец');
    }
});