import '@pnotify/core/dist/BrightTheme.css';
import { alert, Stack } from '@pnotify/core';

export const myStack = new Stack({
  modal: true,
  context: document.getElementById('body'),
});

export const notice = () => {
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
};

//--------------------ALTER PNOTIFY

// import { notice, error } from '@pnotify/core';
// import '@pnotify/core/dist/BrightTheme.css';

// const myNotice = notice({
//   closer: false,
//   sticker: false,
//   maxTextHeight: null,
//   maxOpen: 1,
//   text: 'Too many matches found. Please use more specific query.',
// });

// const myError = error({
//   closer: false,
//   sticker: false,
//   maxTextHeight: null,
//   maxOpen: 1,
//   text: 'Entered query does not exist, please check your query',
// });

////----------------------------------------------------
