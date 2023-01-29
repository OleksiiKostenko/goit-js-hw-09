// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { convertMs } from './function';
import '../css/common.css';

const dataTimeEL = document.querySelector('input#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const spanDayEl = document.querySelector('[data-days]');
const spanHoursEl = document.querySelector('[data-hours]');
const spanMinEl = document.querySelector('[data-minutes]');
const spanSecEl = document.querySelector('[data-seconds]');
startBtnEl.disabled = true;
let timerId = null;

console.log(startBtnEl);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < options.defaultDate) {
      Notify.failure('Please choose a date in the future');
      startBtnEl.disabled = true;
      return;
    }
    startBtnEl.disabled = false;
    options.defaultDate = selectedDates[0];
  },
};

flatpickr(dataTimeEL, options);

console.log(options.defaultDate.getTime());

startBtnEl.addEventListener('click', stratTimer);

function stratTimer() {
  timerId = setInterval(() => {
    const timeDifference = options.defaultDate - Date.now();
    console.log(timeDifference);
    if (timeDifference < 1000) {
      clearInterval(timerId);
    }
    const times = convertMs(timeDifference);
    updateSpanValeu(times);
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateSpanValeu({ days, hours, minutes, seconds }) {
  // spanDayEl.textContent = days.toString();
  spanDayEl.textContent = addLeadingZero(days);
  spanHoursEl.textContent = addLeadingZero(hours);
  spanMinEl.textContent = addLeadingZero(minutes);
  spanSecEl.textContent = addLeadingZero(seconds);
}
