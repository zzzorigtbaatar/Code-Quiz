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

//creates questions object literal that contains q objects
//q template
// q : {question: 'insert question here?', choice1: "insert choice1" , choice2: "insert choice2" , choice3: "insert choice3" , choice4: "insert choice4" , correctChoice: "insert correct choice"}
//Reference: https://stackoverflow.com/a/37077847
var questions = {
    q1 : {question: 'How do you not increment variable i by 1?', choice1: "i++" , choice2: "i+1" , choice3: "i += 1" , choice4: "i = 1" , correctChoice: "i = 1"},
    q2 : {question: 'How do you add an element to an existing one?', choice1: ".append()" , choice2: ".glue()" , choice3: ".createNewElement()" , choice4: ".add()" , correctChoice: ".append()"},
    q3 : {question: 'What is not a data type?', choice1: "integer" , choice2: "string" , choice3: "boolean" , choice4: "count" , correctChoice: "count"}
}

//questions to ask
var allQuestions = [];

//inserts questions into allQuestions array
for (var key in questions) {
    allQuestions.push(questions[key]);
}

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
    score.textContent = scoreCounter + "(High Score)";
}

function startGame() {
    welcomeText.textContent = "Do your best!"
    gameOver = false;
    timerCount = 45;
    startButton.disabled = true;
    resetButton.disabled = true;
    displayQuestions();
    startTimer();
}

var questionObject = {
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctAnswer: ""
  };
  

//displays question object attributes
function displayQuestions() {
    score.textContent = scoreCounter;
    for(i = 0; i < questionsArray.length; i++){

    }
}

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (gameOver && timerCount > 0) {
                clearInterval(timer);
                winGame();
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

//called if win condition is met
function winGame() {
    welcomeText.textContent = "You got them all! Nice!";
    startButton.disabled = false;
    esetButton.disabled = false;
    setScore()
}

function endGame(){
    welcomeText.textContent = "Time's Up!";
    startButton.disabled = false;
    esetButton.disabled = false;
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
    welcomeText.textContent = "Test your Javascript knowledge!";
    displayScore();
}

//calls resetGame function when clicked
resetButton.addEventListener("click", resetGame);