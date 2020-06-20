const mainUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&`;

export default {
  page: 1,
  query: '',
  perPage: 12,
  key: '16768453-e9e01aacbda51e04761bf85fa',

  fetchImages() {
    const searchParams = `q=${this.query}
    &page=${this.page}
    &per_page=${this.perPage}
    &key=${this.key}`;

    return fetch(mainUrl + searchParams)
      .then(response => response.json())
      .then(parsedResponse => {
        return parsedResponse.hits;
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
