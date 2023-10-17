window.onload = () => {
  document.querySelector("#start").onclick = startBtn;
  document.querySelector("#reset").onclick = resetBtn;
};

// Start Time
function startBtn() {
  let date = document.getElementById("date").value; // To get the value of date
  let time = document.getElementById("time").value; // To get the value of time
  let stop = document.getElementById("stop");
  let endTime = new Date(date + " " + time); // To get the end time value

  let timeInterval = setInterval(() => countdownTime(endTime), 1000); // To change the time after few seconds

  stop.addEventListener("click", () => {
    clearInterval(timeInterval);
  });
}

function countdownTime(endTime) {
  let currentTime = new Date();

  //   let days = document.getElementById("count-days").value;
  //   let hrs = document.getElementById("count-hours").value;
  //   let mins = document.getElementById("count-minutes").value;
  //   let sec = document.getElementById("count-seconds").value;

  let days = document.querySelector("#count-days");
  let hours = document.querySelector("#count-hours");
  let mins = document.querySelector("#count-minutes");
  let sec = document.querySelector("#count-seconds");

  if (endTime > currentTime) {
    let remainingTime = (endTime - currentTime) / 1000;
    console.log(remainingTime);

    days.innerText = Math.floor(remainingTime / (24 * 60 * 60));
    hours.innerText = Math.floor((remainingTime / (60 * 60)) % 24);
    mins.innerText = Math.floor((remainingTime / 60) % 60);
    sec.innerText = Math.floor(remainingTime % 60);
  } else {
    days.innerText = 0;
    hours.innerText = 0;
    mins.innerText = 0;
    sec.innerText = 0;
  }
}

function resetBtn() {
  document.querySelector("#count-days").innerText = 0;
  document.querySelector("#count-hours").innerText = 0;
  document.querySelector("#count-minutes").innerText = 0;
  document.querySelector("#count-seconds").innerText = 0;
}
