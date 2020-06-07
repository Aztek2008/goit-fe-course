import '@pnotify/core/dist/BrightTheme.css';
import { alert, Stack } from '@pnotify/core';

const myStack = new Stack({
  modal: true,
  context: document.getElementById('body'),
});

function notice() {
  alert({
    title: false,
    closer: false,
    sticker: false,
    icon: true,
    maxOpen: 1,
    text: 'Too many matches found. Please use more specific query.',
    width: '400px',
    maxTextHeight: null,
    type: 'error',
    stack: myStack,
  });
}

import fetchCountry from './fetchCountries';
import loadedCountriesTemplate from '../templates/loaded-countries.hbs';
import matchedCountryTemplate from '../templates/matched-country.hbs';
import { engAlphabet } from './engAlphabet';

const debounce = require('lodash.debounce');
const queryField = document.querySelector('#search-form');
const countryList = document.querySelector('#country-list');
const countryBox = document.querySelector('#matched-country-box');

queryField.addEventListener('input', debounce(buildQueryList, 500));

function buildQueryList(e) {
  e.preventDefault();

  const input = queryField.elements.query.value;
  const testLetter = input.substring(0, 1).toUpperCase();
  const engLetter = engAlphabet.includes(testLetter);

  if (!engLetter) {
    return;
  }

  clearListItems();
  clearCountryBox();

  fetchCountry
    .fetchCountries(input)
    .then(data => {
      const dataName = data[0].name.toLowerCase();
      // ЕСЛИ УБРАТЬ СТРОКУ ВЫШЕ, ТО В СЛУЧАЕ НЕВЕРНОЙ КОМБИНАЦИИ СИМВОЛОВ ПОЯВЛЯЮТСЯ ПУСТЫЕ ЭЛЕМЕНТЫ В СПИСКЕб
      // НО ЭТА ПЕРЕМЕННАЯ НИГДЕ НЕ ИСПОЛЬЗУЕТСЯ. ПОЧЕМУ ТАК?
      // const existingLetterCombination = dataName.indexOf(input.toLowerCase());
      myStack.close();
      clearListItems();
      clearCountryBox();
      buildMachedCountryList(data);
      return data;
    })
    .then(data => {
      if (countryList.childElementCount > 10) {
        clearListItems();
        clearCountryBox();
        notice();
      }

      if (countryList.childElementCount === 1) {
        myStack.close();
        clearListItems();
        clearCountryBox();
        buildMachedCountryBlock(data);

        return data.name;
      }
    })
    .catch(error => {
      console.warn('error', error);
    });
}

function buildMachedCountryList(items) {
  const markup = loadedCountriesTemplate(items);
  countryList.insertAdjacentHTML('beforeend', markup);
}

function buildMachedCountryBlock(item) {
  const markup = matchedCountryTemplate(item);
  countryBox.insertAdjacentHTML('beforeend', markup);
}

function clearListItems() {
  countryList.innerHTML = '';
}

function clearCountryBox() {
  countryBox.innerHTML = '';
}
