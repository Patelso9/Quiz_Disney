// declare all variables
var startBtn = document.querySelector('#start-btn');
var start = document.querySelector('.start');
var timerEl = document.querySelector('.timer')

var qCard = document.querySelector('#quiz-card');
var question = document.querySelector('#question');
var answer = document.querySelector('#answer');
var question = document.querySelector('#question');

var optA = document.querySelector("#A")
var optB = document.querySelector("#B")
var optC = document.querySelector("#C")
var optD = document.querySelector("#D")

console.log(startBtn);
console.log(start);

// set up variables
var timeLeft = questionBank.length*10;

// start timer
function startTimer() {
  timer = setInterval(function() {
    timeLeft--;
    timerEl.textContent = "Time Remaining: " + timeLeft;
    if (timerLeft === 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        endGame();
      }
    }, 1000);
}

function runQuestions () {

}



// event listeners
startBtn.addEventListener("click", function(event) {
  startTimer();
  // runQuestions();
  start.classList.add("hide");


})