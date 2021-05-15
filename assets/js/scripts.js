// Declare variables
 // start button
var startBtn = document.querySelector('#start-btn');
var start = document.querySelector('.start');
      // console.log(startBtn);
      // console.log(start);

  // question cards
var qPage = document.querySelector('#question-page');
var qCard = document.querySelector('#question-card');

var qEl = document.querySelector('#question-line')
var choiceEl = document.querySelector('#q-list')
var optA = document.querySelector("#opt-a")
var optB = document.querySelector("#opt-b")
var optC = document.querySelector("#opt-c")
var optD = document.querySelector("#opt-d")

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
    if (timeLeft === 0 || q >= questionBank.length) {
        // Clears interval and stops timer
        clearInterval(timeInt);
        endGame();
      }
    }, 1000);
}

// run questions
function askQuestions () {
  // var currentQ = questionBank;  // retrieve current item

  if (q < questionBank.length) {
    qEl.textContent = questionBank[q].question;  //update Q on HTML 
    // choiceEl.innerHTML="";  //clear out old question on HTML
    //   console.log(qEl);
    // loop over choice array
    choiceEl.textContent = questionBank[q].options;
  // for (var i =0; i < 4; i++){
  //   choiceEl[i] = questionBank[q].

  // }
  
  //   qEl.textContent = questionBank[q].question;
  //   optA.textContent = questionBank[q].options[0];
  //   optB.textContent = questionBank[q].options[1];
  //   optC.textContent = questionBank[q].options[2];
  //   optD.textContent = questionBank[q].options[3];
  }
  // else endGame();
}

// choosing right/wrong answers
function chooseAns (event) {
  if (q >= questionBank.length){
    endGame();
    clearInterval(timeInt);
  } else {
    if (event === questionBank[q].answer ){
      // feedback1.textContent = "Correct!"
    } else {
      timeLeft -= 5;
      // feedback2.textContent = "Wrong!"
    }
    score = timeLeft;
    q++;
    askQuestions ();
  }
}


// event listeners

  // start game
startBtn.addEventListener("click", function(event) {
  startTimer();
  askQuestions();
  start.classList.add("hide");
  qPage.classList.remove("hide");


});

  // question cards
qCard.addEventListener('click', function (event) {
  var event = event.target;
  chooseAns(event.textContent.trim());
});

function endGame(){
  return null;
};
