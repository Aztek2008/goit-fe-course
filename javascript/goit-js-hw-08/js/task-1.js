'use strict';

//                     Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img,
// и указываться в href ссылки (это необходимо для доступности).

import gallery from './gallery-items.js';
// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// ->
// создать объект, который содержит в себе масив элементов галереи с набором свойств:
// - открытие модального окна по клику на элементе галереи.
// - для этого добавлять на div.lightbox CSS-класс is-open
// - закрытие модального окна по клику на кнопку button[data-action="close-modal"].
// - очистка значения атрибута src элемента img.lightbox__image.
// создать функцию, которая вставляет шаблон элемента галлереи
const galleryGrid = document.querySelector('ul.js-gallery');
const modalWindow = document.querySelector('div.js-lightbox');
const modalWindowCloseBtn = document.querySelector('button.lightbox__button');
const galeryItems = gallery.map(galeryItem => buildGalleryElement(galeryItem)).join('');
const galeryItemDescription = gallery.map(galeryItem => galeryItem.description);
console.dir(gallery)
console.dir(galeryItemDescription)


const galleryElements = {
  elements: [],
  add(picture) {
    const element = picture;
    this.elements.push(element);

    return element;
  }
};

// const galeryItem = galleryElements.add()

// console.dir(galeryItems)

// galleryGrid.addEventListener('click', openModal);

appendGalleryElement(galleryGrid, galeryItems)


function buildGalleryElement(e) {
  return `
<li class="gallery__item">
  <a class="gallery__link"
    href="${e.original}">
    <img
      class="gallery__image"
      src="${e.preview}"
      data-source="${e.original}"
      alt="${e.description}"
    />
  </a>
</li>

 `
};

buildGalleryElement()

function appendGalleryElement(parentRef, galleryEl) {
  parentRef.insertAdjacentHTML('beforeend', galleryEl)
}

// function openModal(e) {
//   // const galleryContainer = e.currentTarget;
//   // modalWindow.classList.add('is-open');

//   if (e.target !== e.currentTarget) {
//     modalWindow.classList.add('is-open');
//   }

//   const activeLink = e.currentTarget.querySelector('.is-open');

//   if (activeLink) {
//     activeLink.classList.remove('is-open');
//   }

//   e.target.classList.add('nav__link--active')
// };

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
//
// Открытие модального окна по клику на элементе галереи.
//
// Подмена значения атрибута src элемента img.lightbox__image.
//
// Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
//
// Очистка значения атрибута src элемента img.lightbox__image.
// Это необходимо для того, чтобы при следующем открытии модального окна,
// пока грузится изображение, мы не видели предыдущее.