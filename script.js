//elements on the document
var welcomeText = document.querySelector(".welcome-text");
var score = document.querySelector(".score")
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
var timerElement = document.querySelector(".timer-count");
var gameOver = false;

//initial values for variables
var scoreCounter = 0;
var timer;
var timerCount = 0;

//runs when the page is loaded
function init() {
    displayScore();
}

//puts locally stored high score if there is any
function displayScore() {
    var storedScore = localStorage.getItem("scoreCount");
    if (storedScore === null) {
        scoreCounter = 0;
    } else {
        scoreCounter = storedScore;
    }
    score.textContent = scoreCounter;
}

function startGame() {
    gameOver = false;
    timerCount = 45;
    startButton.disabled = true;
    displayQuestions();
    startTimer();
}

//displays question object attributes
function displayQuestions() {

}


//called if win condition is met
function winGame() {
    welcomeText.textContent = "You got them all! Nice!";
    startButton.disabled = false;
    setScore()
}

function endGame(){
    welcomeText.textContent = "Time's Up!";
    startButton.disabled = false;
    setScore()
}

// Updates win count on screen and sets win count to client storage
function setScore() {
    score.textContent = scoreCounter;
    var userInput = window.prompt("You scored " + scoreCounter + ". Enter your initials:");
    localStorage.setItem("winCount", scoreCounter);
    localStorage.setItem("initials", userInput);
  }

//calls startGame function when clicked
startButton.addEventListener("click", startGame);

//call init() when page script is run
init();




// resets score and displays new value
function resetGame() {
    scoreCounter = 0;
    displayScore();
}

//calls resetGame function when clicked
resetButton.addEventListener("click", resetGame);