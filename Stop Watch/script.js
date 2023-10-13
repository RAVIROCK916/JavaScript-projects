const time = document.getElementById("time");

const play = document.getElementById("play");
const lap = document.getElementById("lap");
const reset = document.getElementById("reset");

const laps = document.getElementsByClassName("laps")[0];

let t = 0;

let interval = () => {
  t = t + 0.01;
  t = t.toFixed(2);
  time.innerHTML = `<p>${t}</p>`;
  t = Number(t);
};

let playInterval;
const playTime = () => {
  const playE = document.getElementById("play");
  let child = playE.children[0];
  if (child.classList.contains("fa-play")) {
    playInterval = setInterval(interval, 10);
  } else {
    clearInterval(playInterval);
  }
  child.classList.toggle("fa-play");
  child.classList.toggle("fa-pause");
  // stop.addEventListener("click", () => stopTime(playInterval));
  reset.addEventListener("click", () => resetTime(playInterval));
};

const lapTime = (playInterval) => {
  const newLap = document.createElement("li");
  newLap.innerText = `${t}`;
  laps.append(newLap);
};

const resetTime = (playInterval) => {
  t = 0;
  t = t.toFixed(2);
  time.innerHTML = `<p>${t}</p>`;
  t = Number(t);
  clearInterval(playInterval);
  const playC = document.getElementById("play").children[0].classList;
  if (playC.contains("fa-pause")) {
    playC.toggle("fa-play");
    playC.toggle("fa-pause");
  }
  laps.innerHTML = "";
};
