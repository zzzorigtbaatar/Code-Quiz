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

//call init() when page script is run
init();