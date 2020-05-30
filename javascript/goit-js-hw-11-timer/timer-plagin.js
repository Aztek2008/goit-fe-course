'use strict';
// import { days, hours, mins, secs } from './formulas.js';


export class CountdownTimer {
  constructor({
    selector,
    targetDate
  }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
  }

  updateClockFace() {
    let time = this.targetDate - Date.now();


    const t = Date.parse(this.targetDate) - Date.parse(new Date());
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time / (1000 * 60 * 60)) % 24));
    const mins = this.pad(Math.floor((time / 1000 / 60) % 60));
    const secs = this.pad(Math.floor((time / 1000) % 60));



    const deadlineMessage = document.querySelector('.countdouwn-end-message');
    const daysSpan = this.selector.querySelector('[data-value="days"]');
    const hourSpan = this.selector.querySelector('[data-value="hours"]');
    const minuteSpan = this.selector.querySelector('[data-value="mins"]');
    const secondSpan = this.selector.querySelector('[data-value="secs"]');

    if (t <= 0) {
      this.selector.style.display = "none";
      deadlineMessage.classList.add("visible");
      clearInterval(this.timeInterval);
      return;
    }

    daysSpan.textContent = `${days}`;
    hourSpan.textContent = `${hours}`;
    minuteSpan.textContent = `${mins}`;
    secondSpan.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  timeInterval = setInterval(() => {
    this.updateClockFace();
  }, 1000);
};