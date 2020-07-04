const galleryGrid = document.querySelector('#gallery');
const modalWindow = document.querySelector('.js-lightbox');
const currentImage = document.querySelector('.lightbox__image');
const overlayArea = document.querySelector('.lightbox__content');

export function initModal() {
  galleryGrid.addEventListener('click', openModal);
}

function openModal(e) {
  e.preventDefault();

  modalWindow.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModal);

  if (e.target === e.currentTarget) {
    return;
  }

  modalWindow.classList.add('is-open');
  currentImage.src = e.target.srcset;
}

function closeModal(e) {
  if (e.target !== overlayArea && e.key !== 'Escape') {
    return;
  }

  modalWindow.classList.remove('is-open');
  modalWindow.removeEventListener('click', closeModal);
  currentImage.srcset = '';
}

// function createModal() {
//   const markup = `<div class="lightbox js-lightbox">
//   <div class="lightbox__overlay"></div>

//   <div class="lightbox__content">
//     <img class="lightbox__image" src="#" alt="" />
//   </div>
// </div>`;

//   body.insertAdjacentHTML('beforeend', markup);
// }
