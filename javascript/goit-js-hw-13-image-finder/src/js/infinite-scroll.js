import InfiniteScroll from 'infinite-scroll';
import apiService from './apiService';

// ПОЧЕМУ ЭТОТ КОД СРАЗУ ЗАПУСКАЕТСЯ?

const galleryContainer = document.querySelector('#gallery');

export const infScrollInstance = new InfiniteScroll(galleryContainer, {
  responseType: 'text',
  history: false,

  path() {
    // ПОЧЕМУ ЭТОТ КОД ЗАПУСКАЕТСЯ 2 РАЗА ПОДРЯД?
    console.log('Query log at infScroll:', apiService.query);
    console.log('PageIndex log at infScroll', this.pageIndex);
    console.dir(this);
    return `https://pixabay.com/api/?
    image_type=photo
    &orientation=horizontal
    &q=cat
    &page=${this.pageIndex}
    &per_page=${apiService.perPage}
    &key=${apiService.key}`;
  },
});

// infScrollInstance.on('load', response => {
//   console.log('Query log at API render:', apiService.query);

//   const images = JSON.parse(response);
//   const markup = images.map(image => postTemplate(image)).join('');
//   const proxyEl = document.createElement('div');

//   proxyEl.innerHTML = markup;
//   const parsedItems = proxyEl.querySelectorAll('.item');
//   infScrollInstance.appendItems(parsedItems);
// });

// infScrollInstance.loadNextPage();
