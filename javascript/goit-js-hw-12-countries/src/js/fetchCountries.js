'use strict';

const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default {
  fetchCountries() {
    return fetch(baseUrl + 'ukraine').then(respond => respond.json());
    // .then(data => console.log(data));

    // const requestParams = `?q=${this.query}&pageSize=10&page=${this.page}`;
  },
};
