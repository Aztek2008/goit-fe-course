'use strict';

import gallery from './gallery-items.js';

const galleryGrid = document.querySelector('ul.js-gallery');
const modalWindow = document.querySelector('div.js-lightbox');
const modalWindowCloseBtn = document.querySelector('button.lightbox__button');
const galeryItems = gallery
  .map(galeryItem => buildGalleryElement(galeryItem))
  .join('');
const galeryItemOriginals = gallery.map(galeryItem => galeryItem.original);
const currentImage = document.querySelector('.lightbox__image');
const overlayArea = document.querySelector('div.lightbox__content'); // -- ДО __overlay КЛИК НЕ ДОСТАЕТ

{
  // const galleryElements = {
  //   elements: [],
  //   add(picture) {
  //     const element = picture;
  //     this.elements.push(element);
  //     return element;
  //   },
  // };
} // -- НУЖЕН ЛИ ЭТОТ ОБЪЕКТ?

galleryGrid.addEventListener('mouseover', openModal); // -- ПОСТАВИЛ ТАКОЙ СЛУШАТЕЛЬ ЧТОБЫ ПРОВЕРИТЬ ФУНЦКЦИОНАЛ
// galleryGrid.addEventListener('click', openModal);  --  НЕ РАБОТАЕТ

appendGalleryElement(galleryGrid, galeryItems);

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
 `;
}

function appendGalleryElement(parentRef, galleryEl) {
  parentRef.insertAdjacentHTML('beforeend', galleryEl);
}

function openModal(e) {
  modalWindow.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModal);
  document.addEventListener('keydown', moveImage);

  if (e.target === e.currentTarget) {
    return;
  }
  modalWindow.classList.add('is-open');
  currentImage.srcset = e.target.dataset.source;
  currentImage.alt = e.target.alt;
}

function closeModal(e) {
  if (
    e.target === modalWindowCloseBtn ||
    e.target === 'Escape' ||
    e.target === overlayArea
  ) {
    modalWindow.classList.remove('is-open');
    modalWindow.removeEventListener('click', closeModal);
    currentImage.srcset = '';
  }
}

function moveImage(e) {
  const items = document.querySelectorAll('.gallery__item');
  const modalCurrentImage = document.querySelector('.is-open img');
  const modalCurrentSrc = modalCurrentImage.srcset;

  if (e.code === 'ArrowRight') {
    for (let item of items) {
      if (item.lastElementChild.href === modalCurrentSrc) {
        const nextImageLink = item.previousElementSibling.lastElementChild.href;
        currentImage.srcset = nextImageLink;
      }
    }
  }

  if (e.code === 'ArrowLeft') {
    for (let item of items) {
      if (item.lastElementChild.href === modalCurrentSrc) {
        const prevImageLink = item.previousElementSibling.lastElementChild.href;
        currentImage.srcset = prevImageLink;
      }
    }
  }
}
// ЕСЛИ ЛИСТАТЬ БЫСТРО, В КОНСОЛИ ПОКАЗЫВАЕТ ТАКУЮ ОШИБКУ:
// task-1.js:86 Uncaught TypeError: Cannot read property 'lastElementChild' of null
// at HTMLDocument.moveImage (task-1.js:86)
