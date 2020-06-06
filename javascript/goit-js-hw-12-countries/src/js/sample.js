//NEWS

import newsService from '../services/news-services';
import spinner from '../services/spinner';
import articleListItemsTemplate from '../templates/article-lists-items.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  articleList: document.querySelector('#article-list'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function searchFormSubmitHandler(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.query;

  clearListItems();

  newsService.resetPage();
  newsService.searchQuery = input.value;

  spinner.show();

  newsService
    .fetchArticles()
    .then(articles => {
      setTimeout(() => {
        spinner.hide();
        insertListItems(articles);
      }, 3000);
    })
    .catch(error => {
      console.warn(error);
    });

  input.value = '';
}

function loadMoreBtnHandler(e) {
  newsService
    .fetchArticles()
    .then(articles => {
      spinner.hide();
      insertListItems(articles);
    })
    .catch(error => {
      console.warn(error);
    });
}

function insertListItems(items) {
  const markup = articleListItemsTemplate(items);

  refs.articleList.insertAdjacentHTML('beforeend', markup);
}

function clearListItems() {
  refs.articleList.innerHTML = '';
}

// NEWS-SERVICE //////////////////////////////////////////////////////////////////////////////

const baseUrl = 'http://newsapi.org/v2/everything';

export default {
  // page: 1,
  // query: '',
  fetchArticles() {
    // const options = {
    //   headers: {
    //     Authorization: '031a952a678942e1a9fedb6e6f688267',
    //   },
    // };

    const requestParams = `?q=${this.query}&pageSize=10&page=${this.page}`;

    return fetch(baseUrl + requestParams, options)
      .then(response => response.json())
      .then(parseResponse => {
        this.incrementPage();
        return parseResponse.articles;
      });
  },

  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
