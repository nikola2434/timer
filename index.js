const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.getElementById("value");
let interval;

const createTimerAnimator = (seconds) => {
  if (seconds > 0) {
    timerEl.innerHTML = transformationTime(--seconds);
  } else {
    clearInterval(interval);
  }
};

inputEl.addEventListener("input", (event) => {
  const value = event.target.value;
  event.target.value = value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  let value = Number(inputEl.value);
  const time = transformationTime(value);
  timerEl.innerHTML = time;

  clearInterval(interval);
  interval = setInterval(() => {
    createTimerAnimator(value), value--;
  }, 1000);

  inputEl.value = "";
});

function transformationTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60) - hours * 60;
  let seconds = time % 60;

  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  return `${hours}:${minutes}:${seconds}`;
}
