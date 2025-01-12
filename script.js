const hoursElem = document.querySelector(".hours");
const minutesElem = document.querySelector(".minutes");
const secondsElem = document.querySelector(".seconds");
const clockBoxElem = document.querySelectorAll(".clock-box");
const btns = document.querySelectorAll("button");

let timezone = 0;

function getTime() {
  const date = new Date();

  let hours = date.getHours() + timezone;
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours < 10) hours = 0(hours);
  if (minutes < 10) minutes = 0(minutes);
  if (seconds < 10) seconds = 0(seconds);

  return [String(hours), String(minutes), String(seconds)];
}

function getDiffTimeZone(country) {
  switch (country) {
    case "cairo":
      return -2;
    case "tokio":
      return +5;
    case "geneva":
      return -3;
    case "nyc":
      return -9;
    default:
      return 0;
  }
}

function app() {
  setInterval(() => {
    const [h, m, s] = getTime();

    hoursElem.querySelector("span").textContent = h;
    minutesElem.querySelector("span").textContent = m;
    secondsElem.querySelector("span").textContent = s;
  }, 100);

  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const { country } = btn.dataset;
      timezone = getDiffTimeZone(country.toLowerCase());
      btns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

app();
