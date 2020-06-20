import apiService from './apiService';
import pictureItemTemplate from '../templates/photo-card.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  galleryList: document.querySelector('#gallery'),
  bottomLine: document.querySelector('#scroll-bottom-line'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

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
    })
    .catch(error => {
      console.warn(error);
    });

  setTimeout(() => {
    loadMore();
  }, 1000);
}

function insertListItems(items) {
  const markup = pictureItemTemplate(items);
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

function clearListItems() {
  refs.galleryList.innerHTML = '';
}

function loadMore() {
  let globalScrollHeight = refs.galleryList.scrollHeight;
  const options = {
    rootMargin: '50px',
  };

  const onEntry = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        apiService.incrementPage();
        apiService
          .fetchImages()
          .then(images => {
            insertListItems(images);
            globalScrollHeight += globalScrollHeight;
            scrollTo({
              top: `${globalScrollHeight}`,
              behavior: 'smooth',
            });
          })
          .catch(error => {
            console.warn(error);
          });
      }
    });
  };

  const observer = new IntersectionObserver(onEntry, options);

  observer.observe(refs.bottomLine);
}
