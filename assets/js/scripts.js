    questions.choices.forEach()

    var startButton = document.getElementById('start-btn');
    var questionScr = document.getElementById('question-container');
    var questionEl = document.getElementById('questions');
    var nextBtnEl = document.getElementById('next-btn')
    var scoreBtnEl = document.getElementById('score-btn')

    
    startButton.addEventListener('click', startGame)
    
    
    function startGame(){
        console.log('started');
        startButton.classList.add('hide');
        questionContainerElement.classlist.remove('hide');
        setNextQuestion()
    }
    
    function selectAnswer(){}
    
    function setNextQuestion(){}

// timer
    // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }


    //Leader board
    moment().format("MMM Do YYYY, h:mm:ss a");