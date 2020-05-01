'use strict';

// Напиши скрипт для создания галереи изображений по массиву данных.
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().
//
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css - классы.
//
// ul#gallery.

const images = [{
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const slider = document.querySelector('ul#gallery');
let activeSlide = 0;

insertLayout(slider, buildLayout());
const container = document.querySelector("div.container");

function insertLayout(parentEl, layoutEl) {
  parentEl.insertAdjacentHTML('beforeend', layoutEl);
}


function buildLayout() {
  return `
  <div class="container">
    ${images
      .map(
        image => `
          <li class = "image__wrapper">
          <img src = ${image.url} alt = ${image.alt} class = "image" width = "100%"/>
          </li>
        `
      )
    .join('')}
  </div>
  <button class = "arrow arrow--prev js-prev"></button>
  <button class = "arrow arrow--next js-next"></button>
  `;
}

function moveLeft() {
  if (activeSlide > 0) {
    activeSlide--;
    container.style.left = -500 * activeSlide + 'px';
  }
}

function moveRight() {
  if (activeSlide < images.length - 1) {
    activeSlide++;
    container.style.left = -500 * activeSlide + 'px';
  }
}

const prev = document.querySelector('.js-prev');
const next = document.querySelector('.js-next');

prev.addEventListener('click', moveLeft);
next.addEventListener('click', moveRight);