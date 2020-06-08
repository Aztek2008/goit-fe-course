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

// const myStack = new PNotify.Stack({ dir1: 'down', firstpos1: 25 });
// PNotify.notice({
//   text: 'Notice 1.',
//   stack: myStack,
// });
// PNotify.notice({
//   text: 'Notice 2.',
//   stack: myStack,
// });

// //--------------------ALTER PNOTIFY

// export default function showStackBottomRight(type) {
//   if (typeof window.stackBottomRight === 'undefined') {
//     window.stackBottomRight = new PNotify.Stack({
//       dir1: 'up',
//       dir2: 'left',
//       firstpos1: 25,
//       firstpos2: 25,
//     });
//   }
//   // const opts = {
//   //   title: 'Over Here',
//   //   text: "Check me out. I'm in a different stack.",
//   //   stack: window.stackBottomRight,
//   // };
//   switch (type) {
//     case 'error':
//       opts.title = 'Oh No';
//       opts.text = 'Watch out for that water tower!';
//       opts.type = 'error';
//       break;
//     case 'info':
//       opts.title = 'Breaking News';
//       opts.text = 'Have you met Ted?';
//       opts.type = 'info';
//       break;
//     case 'success':
//       opts.title = 'Good News Everyone';
//       opts.text = "I've invented a device that bites shiny metal asses.";
//       opts.type = 'success';
//       break;
//   }
//   // PNotify.alert(opts);
// }
