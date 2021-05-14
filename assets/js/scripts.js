// Declare variables
 // start button
var startBtn = document.querySelector('#start-btn');
var start = document.querySelector('.start');
      // console.log(startBtn);
      // console.log(start);

  // question cards
var qCard = document.querySelector('.question-page');
var question = document.querySelector('#question');
var answer = document.querySelector('#answer');
var choices = document.querySelector('#choices');

var optA = document.querySelector("#A")
var optB = document.querySelector("#B")
var optC = document.querySelector("#C")
var optD = document.querySelector("#D")

var q = 0;

  // timer variables
var timerEl = document.querySelector('.timer')
var timeLeft = questionBank.length*10;
var timeInt;

  // score card
var s = 0;
var score = 0;
var scoreBoard = [];


// run timer
function startTimer() {
  timeInt = setInterval(function() {
    timeLeft--;
    timerEl.textContent = "Time Remaining: " + timeLeft;
    if (timerLeft === 0 || q <= questionBank.length) {
        // Clears interval and stops timer
        clearInterval(timeInt);
        endGame();
      }
    }, 1000);
}

// run questions
function runQuestions () {
  if (q<questionBank.length) {
    question.textContent=questionBank[q].question;
    optA.textContent = questionBank[q].selection[0];
    optB.textContent = questionBank[q].selection[1];
    optC.textContent = questionBank[q].selection[2];
    optD.textContent = questionBank[q].selection[3];
  }
  else endGame();
}

// choosing right/wrong answers
function chooseAns (event) {
  if (q >= questionBank.length){
    endGame();
    clearInterval(timeInt);
  } else {
    if (event === questionBank[q].answer ){
      feedback1.textContent = "Correct!"
    } else {
      timeLeft -= 5;
      feedback2.textContent = "Wrong!"
    }
    score = timeLeft;
    q++;
    runQuestions ();
  }
}


// event listeners

  // start game
startBtn.addEventListener("click", function(event) {
  startTimer();
  // runQuestions();
  start.classList.add("hide");
  qCard.classList.remove("hide");


});

  // question cards
choices.addEventListener('click', function (event) {
  var event = event.target;
  chooseAns(event.textContent.trim());
});

