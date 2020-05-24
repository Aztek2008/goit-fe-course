import colors from "./colors.js";
import randomIntegerFromInterval from "./randomInteger.js";

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const colorSwitch = {
  isActive: false,

  startRandomColoring() {
    if (startBtn.isActive) {
      return
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const colorIdx = randomIntegerFromInterval(0, colors.length);
      body.style.backgroundColor = colors[colorIdx];
    }, 1000)
  },

  stopColor() {
    clearInterval(this.intervalId);
    this.isActive = false;
  }

};

startBtn.addEventListener('click', colorSwitch.startRandomColoring.bind(colorSwitch));
stopBtn.addEventListener('click', colorSwitch.stopColor.bind(colorSwitch));