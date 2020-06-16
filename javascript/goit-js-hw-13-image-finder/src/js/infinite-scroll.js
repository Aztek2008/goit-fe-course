import InfiniteScroll from 'infinite-scroll';
import apiService from './apiService';

const galleryContainer = document.querySelector('#gallery');

export const infScrollInstance = new InfiniteScroll(galleryContainer, {
  responseType: 'text',
  history: false,

  path() {
    console.log('THIS PAGEIDX', this.pageIndex);
    return `https://pixabay.com/api/?image_type=photo
    &orientation=horizontal
    &q=${apiService.query}
    &page=${this.pageIndex}
    &per_page=${apiService.perPage}
    &key=${apiService.key}`;
  },
});
