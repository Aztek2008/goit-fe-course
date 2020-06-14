// import InfiniteScroll from 'infinite-scroll';
import apiRender from './js/apiRender';
import apiService from './js/apiService';

import './styles.css';

//===================================================================
//
// Access to XMLHttpRequest at
// 'http://pixabay.com/api/?image_type=photo%20%20%20%20%20%20&orientation=
// horizontal%20%20%20%20%20%20&q=undefined%20%20%20%20%20%20&page=1%20%20%20%20%20%20&
// per_page=undefined%20%20%20%20%20%20&key=undefined' from origin 'http://localhost:4040'
// has been blocked by CORS policy:
// Response to preflight request doesn't pass access control check:
// Redirect is not allowed for a preflight request.
//
//===================================================================

// const galleryContainer = document.querySelector('#gallery');

// const infScrollInstance = new InfiniteScroll(galleryContainer, {
//   responseType: 'text',
//   history: false,

//   path() {
//     const currQuery = apiService.query;
//     const currPageIndex = this.pageIndex;
//     const loadedQtty = apiService.perPage;
//     const apiKey = apiService.key;
//     return `http://pixabay.com/api/?image_type=photo
//     &orientation=horizontal
//     &q=${currQuery}
//     &page=${currPageIndex}
//     &per_page=${loadedQtty}
//     &key=${apiKey}`;
//   },
// });

// infScrollInstance.on('load', (response, url) => {
//   const images = JSON.parse(response);
//   const markup = images.map(image => postTemplate(image)).join('');
//   const proxyEl = document.createElement('div');

//   proxyEl.innerHTML = markup;

//   const parsedItems = proxyEl.querySelectorAll('.item');

//   infScrollInstance.appendItems(parsedItems);
// });

// infScrollInstance.loadNextPage();
