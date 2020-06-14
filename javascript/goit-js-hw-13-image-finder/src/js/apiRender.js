import apiService from './apiService';
import pictureItemTemplate from '../templates/photo-card.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  galleryList: document.querySelector('#gallery'),
};

console.dir(refs.searchForm.elements.query);

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
      console.log(images);
      insertListItems(images);
    })
    .catch(error => {
      console.warn(error);
    });
}

function insertListItems(items) {
  const markup = pictureItemTemplate(items);
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

function clearListItems() {
  refs.galleryList.innerHTML = '';
}

apiService.infScrollInstance.on('load', (response, url) => {
  const images = JSON.parse(response);
  const markup = images.map(image => postTemplate(image)).join('');
  const proxyEl = document.createElement('div');

  proxyEl.innerHTML = markup;

  const parsedItems = proxyEl.querySelectorAll('.item');

  apiService.infScrollInstance.appendItems(parsedItems);
});

apiService.infScrollInstance.loadNextPage();
