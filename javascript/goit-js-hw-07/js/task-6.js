'use strict';

// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если
// неправильное - красным. Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector('input#validation-input');

input.addEventListener('blur', (event) => {
  const crntTarget = event.currentTarget;
  const inputLength = event.srcElement.value.length;
  const dataSetLength = crntTarget.dataset.length;

  if (inputLength === Number(dataSetLength)) {
    if (crntTarget.classList.contains('invalid')) {
      crntTarget.classList.remove('invalid');
    }
    crntTarget.classList.add('valid');
  } else {
    if (crntTarget.classList.contains('valid')) {
      crntTarget.classList.remove('valid');
    }
    crntTarget.classList.add('invalid');
  }
});