'use strict';

//Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const sizeTuning = document.querySelector('input#font-size-control');
const outputText = document.querySelector('span#text');

sizeTuning.addEventListener('input', (event) => {
    let tuningValue = (Number(event.srcElement.value) / 2) + 'px';
    outputText.style.fontSize = tuningValue;
});