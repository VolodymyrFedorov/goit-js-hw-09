import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnStart = document.querySelector("[data-start]");
const timerEl = document.querySelector(".timer")

btnStart.disabled = true;

let timerId = null;
let timerStop = null;

Notify.init({
  width: '500px',
  position: 'center-top',
  distance: '50px',
});

flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: Date.now(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        timerStop = selectedDates[0];
        if (selectedDates[0] < Date.now()) {
             btnStart.disabled = true;
           Notify.info("Please choose a date in the future");
        } else {
            btnStart.disabled = false;
        }
    console.log(selectedDates[0]);
  },
});

btnStart.addEventListener("click", startCount);

function startCount() {
  timerId = setInterval(() => {
    const currentTime = Date.now();
    const diff = timerStop - currentTime;
    if (diff <= 0) {
      clearInterval(timerId);
      return Notify.info("Finish");
    }
    const timeRemaining = convert(diff);
    timerEl.querySelector('[data-days]').textContent = formatTime(
      timeRemaining.days
    );
    timerEl.querySelector('[data-hours]').textContent = formatTime(
      timeRemaining.hours
    );
    timerEl.querySelector('[data-minutes]').textContent = formatTime(
      timeRemaining.minutes
    );
    timerEl.querySelector('[data-seconds]').textContent = formatTime(
      timeRemaining.seconds
    );
  }, 1000);
}

function formatTime(time) {
    return time.toString().padStart(2, "0");
  }

function convert(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}