import apiService from './apiService';
import pictureItemTemplate from '../templates/photo-card.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  galleryList: document.querySelector('#gallery'),
  bottomLine: document.querySelector('#scroll-bottom-line'),
};

export function initApiRender() {
  refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
}

function searchFormSubmitHandler(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.query;

  clearListItems();
  apiService.resetPage();
  apiService.searchQuery = input.value;

  apiService
    .fetchImages()
    .then(images => {
      insertListItems(images);
      console.log('Количество фотографий', refs.galleryList.childElementCount);

      setTimeout(() => {
        changeOpacity('.stats-item');
      }, 1000);
    })
    .catch(error => {
      console.warn(error);
    });

  // loadMore(); без задержки никак не удается добиться чтобы не пачками грузились фото.
  //  Мин высота картинок не дает эффекта - только растянутые картинки
  setTimeout(() => {
    loadMore();
  }, 1000);
}

function changeOpacity(className) {
  document.querySelectorAll(className).forEach(el => {
    el.style.transition = 'opacity 0.3s linear 0s';
    el.style.opacity = 1;
  });
}

function insertListItems(items) {
  const markup = pictureItemTemplate(items);
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

function clearListItems() {
  refs.galleryList.innerHTML = '';
}

// Draft for scroll-up button
// scrollTo({
//  let globalScrollHeight = refs.galleryList.scrollHeight;
//   top: `${globalScrollHeight - window.innerHeight * 2}`,
//   behavior: 'smooth',
// });

function loadMore() {
  const options = {
    rootMargin: '100px',
  };

  const onEntry = (entries, observer) => {
    const entry = entries[0];

    if (!entry.isIntersecting) {
      return;
    }
    apiService.incrementPage();
    apiService
      .fetchImages()
      .then(images => {
        insertListItems(images);

        setTimeout(() => {
          changeOpacity('.stats-item');
        }, 1000);

        console.log(
          'Количество фотографий',
          refs.galleryList.childElementCount,
        );
      })
      .catch(error => {
        console.warn(error);
      });
  };

  const observer = new IntersectionObserver(onEntry, options);

  observer.observe(refs.bottomLine);
}
