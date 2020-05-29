'use strict';
// import { days, hours, mins, secs } from './formulas.js';


export class CountdownTimer {
  constructor(selector, targetDate) {
    selector = document.getElementById(this.selector);
    targetDate;
    daysSpan = selector.querySelector('[data-value="days"]');
    hourSpan = selector.querySelector('[data-value="hours"]');
    inuteSpan = selector.querySelector('[data-value="mins"]');
    secondSpan = selector.querySelector('[data-value="secs"]');
  };

  // isActive = true;

  getRemainTime(targetDate) {
    let time = this.targetDate - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return {
      days,
      hours,
      mins,
      secs
    };
  }

  updateClockFace() {
    daysSpan.textContent = `${days}`;
    hourSpan.textContent = `${hours}`;
    minuteSpan.textContent = `${mins}`;
    secondSpan.textContent = `${secs}`;

  };

  timeInterval = setInterval(() => {
    updateClockFace();
  }, 1000);

};




// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2020'),

// });



// const days = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
// const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
// const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
// const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

// pad(value) {
//   return String(value).padStart(2, '0');
// }


// function getTimeRemaining(endtime) {
//   var t = Date.parse(endtime) - Date.parse(new Date());
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   var days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }