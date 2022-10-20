import Countdown from "./countdown.js";

const launchCountdown = new Countdown("07 November 2022");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

setInterval(() => {
  const dayString = String(launchCountdown.total.days).padStart(2, 0);
  const hourString = String(launchCountdown.total.hours).padStart(2, 0);
  const minuteString = String(launchCountdown.total.minutes).padStart(2, 0);
  const secondString = String(launchCountdown.total.seconds).padStart(2, 0);
  day.innerText = dayString;
  hour.innerText = hourString;
  minute.innerText = minuteString;
  second.innerText = secondString;
}, 1000);
