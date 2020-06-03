'use strict';

import fetchCountry from './fetchCountries.js';
// import { debounce } from 'lodash';
import { debounce } from '../../node_modules/lodash'; // пропадает ошибка пути только если полный указываю

const queryField = document.querySelector('#search-form');
console.log(queryField);

// queryField.addEventListener('input', outputValue);
queryField.addEventListener('input', debounce(outputValue, 500));

function outputValue(e) {
  const form = e.currentTarget;
  const input = form.elements.query;

  // fetchCountry.searchQuery = input.value;

  console.dir(input.value);
  // return outputValue;
}
fetchCountry.fetchCountries().then(data => console.table(data));
