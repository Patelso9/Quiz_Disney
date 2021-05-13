// declare all variables
var start_btn = document.getElementById('#start-btn');
var start = document.getElementById('.start');
var timerDisp = document.getElementById('.timer')

var q_card = document.getElementById('#quiz-card');
var question = document.getElementById('#question');
var answer = document.getElementById('#answer');
var question = document.getElementById('#question');

var optA = document.getElementById("#A")
var optB = document.getElementById("#B")
var optC = document.getElementById("#C")
var optD = document.getElementById("#D")

console.log()

// declare variables to keep track of quiz statement (q index, time, time variables)
var timeLeft = questionBank.length * 10


// create startQuiz function to sart qiuz
start_btn.onclick = () => {
  q_card.classList.add("queQuest")
}

console.log(startButton);