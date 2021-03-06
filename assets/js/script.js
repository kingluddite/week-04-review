const timer = setInterval(showTime, 1000);
const stopBtn = document.querySelector('.stop-btn');

// update the browser with the time
function showTime() {
  const myDate = new Date();
  const myTime = myDate.toLocaleTimeString();

  document.querySelector('.demo').innerHTML = myDate;
}

// stop the timer
function myStopFunction() {
  clearInterval(timer); // stops interval
}

stopBtn.addEventListener('click', myStopFunction);
