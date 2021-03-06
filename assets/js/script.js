const greetBtn = document.querySelector('.greet-btn');
const noGreetBtn = document.querySelector('.stop-greet-btn');

let myGreeting;
// alert hello after 3 seconds
function sayHello() {
  myGreeting = setTimeout(function () {
    alert('Hello');
  }, 3000);
}

function stopSayingHello() {
  clearTimeout(myGreeting);
}

greetBtn.addEventListener('click', sayHello);
noGreetBtn.addEventListener('click', stopSayingHello);
