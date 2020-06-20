const galleryGrid = document.querySelector('#gallery');
const modalWindow = document.querySelector('div.js-lightbox');
const currentImage = document.querySelector('.lightbox__image');
const overlayArea = document.querySelector('div.lightbox__content');

galleryGrid.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();
  modalWindow.addEventListener('click', closeModal);

  if (e.target === e.currentTarget) {
    return;
  }
  modalWindow.classList.add('is-open');
  currentImage.src = e.target.srcset;
}

function closeModal(e) {
  if (e.target === overlayArea) {
    modalWindow.classList.remove('is-open');
    modalWindow.removeEventListener('click', closeModal);
    currentImage.srcset = '';
  }
}
