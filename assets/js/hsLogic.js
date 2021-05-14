// function that retieves the highscore from local storage
// add display onto page

function highscore(){}


// declair your pring highscore function
highscore();


//-------------------------

// declare variables to keep track of quiz statement (q index, time, time variables)
var timeLeft = questionBank.length * 10


// create startQuiz function to sart qiuz
start_btn.onclick = () => {
  q_card.classList.add("queQuest")
}

console.log(startButton);

// create startQuiz function to sart qiuz

// put timer stuff in here and run function to get tiyr quiz item

// create function to render questions for the user
function get(){

  // get current questions object from the array

  // update your HTML with current question

  // clear out any old question choices

  // loop over our choices and create new button for new choices
      // check out .forEach (do not need for loop)

  // attach click event listener to each choice
  choice.onclick = q = qClick

  // display questions on page

}

// function for question clicked
function qClicked() {
  // check if user answered wrong question

  // you can decrement time if user is wrong

  // create if to check if time hit 0 or time is still remaining
  if (time < 0){
      time = 0,

  }

  // display time on page

  // check if answer is correct, if correct move on to give gif
  // move to next question

  // check if we're out of questions
  // if out of questions run endQuiz function else get next question
  if (currentQIndex === question.length)
      quizEnd();
      else {
          end();
      }
}

// create functiont to end quiz
// clear time interval
// show a end quiz page
// shoe user final score

// check out methods .hide() and .show
// if time hits 0, run end function

// function to run time
// tume--
// display timer on page
// if time hits 0 run end Q()

// create function for high score

// write any function to check how many questions user for right & perform your marth or hardCode to display user score

// check to maje sure usre inputs user name/initials into user prompt
// save highscores to local storage
// retrieve high scores from local storage

// creaye a new object to store users score fr the high score page

// redirect to the highscores page (hint: window.location.href)
    
    questions.choices.forEach()


    
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


    