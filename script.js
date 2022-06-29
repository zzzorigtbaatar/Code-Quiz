//links elements on the document
var welcomeText = document.querySelector(".welcome-text");
var score = document.querySelector(".score")
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
var timerElement = document.querySelector(".timer-count");
var questionList = document.querySelector(".question-list");
var questionTitle = document.querySelector("#question-title");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var gameOver = false;
var currentQuestion = 0;
var currentScore = 0;

//initial values for variables
var chosenQuestion;
var scoreCounter = 0;
var timer;
var timerCount = 0;

//creates questions object literal that contains q objects
//q template
// q : {question: 'insert question here?', choice1: "insert choice1" , choice2: "insert choice2" , choice3: "insert choice3" , choice4: "insert choice4" , correctChoice: "insert correct choice"}
//Reference: https://stackoverflow.com/a/37077847
// var questions = {
//     q1: { question: 'How do you not increment variable i by 1?', choice1: "i++", choice2: "i+1", choice3: "i += 1", choice4: "i = 1", correctChoice: "i = 1", isUsed: false },
//     q2: { question: 'How do you add an element to an existing one?', choice1: ".append()", choice2: ".glue()", choice3: ".createNewElement()", choice4: ".add()", correctChoice: ".append()", isUsed: false },
//     q3: { question: 'What is not a data type?', choice1: "integer", choice2: "string", choice3: "boolean", choice4: "count", correctChoice: "count", isUsed: false }
// }

//reformatted list of questions
var questions = [
    {
        question: "How do you not increment variable i by 1",
        answers: [
            { a: "i++", isCorrect: false },
            { b: "i + 1", isCorrect: false },
            { c: "i += 1", isCorrect: false },
            { d: "i = 1", isCorrect: true }
        ]
    },
    {
        question: "How do you add an element to an existing one?",
        answers: [
            { a: ".append()", isCorrect: true },
            { b: ".glue()", isCorrect: false },
            { c: ".add()", isCorrect: false },
            { d: ".createNewElement()", isCorrect: false }
        ]
    },
    {
        question: "What is not a data type?",
        answers: [
            { a: "integer", isCorrect: false },
            { b: "string", isCorrect: false },
            { c: "boolean", isCorrect: false },
            { d: "count", isCorrect: true }
        ]
    }
]



//array of questions to ask
var allQuestions = [];

//inserts questions into allQuestions array
for (var key in questions) {
    allQuestions.push(questions[key]);
}

// add fresh questions to question list
function refillQuestionList() {
    allQuestions = [];
    for (var key in questions) {
        allQuestions.push(questions[key]);
    }
}

//runs when the page is loaded
function init() {
    displayScore();
}

//displays locally stored high score if there is any
function displayScore() {
    var storedScore = localStorage.getItem("scoreCount");
    if (storedScore === null) {
        scoreCounter = 0;
    } else {
        scoreCounter = storedScore;
    }
    questionList.style.visibility = "hidden";
    score.textContent = scoreCounter;
    // score.textContent = scoreCounter + " (High Score)";
}


function startGame() {
    welcomeText.textContent = "Do your best!"
    refillQuestionList();
    gameOver = false;
    timerCount = 45;
    startButton.disabled = true;
    resetButton.disabled = true;
    displayQuestion();
    startTimer();
}


//displays question on screen
function displayQuestion() {
    console.log("this is running in displayQuestion");
    console.log("currentQuestion is " + currentQuestion);
    // Randomly picks question from questions array
    // chosenQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];


    if (!gameOver) {
        if (currentQuestion == questionList.length) {
            return;
        }
        chosenQuestion = allQuestions[currentQuestion];

        // do {
        //     chosenQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];
        // } while (chosenQuestion.isUsed === true)

        questionTitle.textContent = chosenQuestion.question;
        choice1.textContent = chosenQuestion.choice1;
        choice2.textContent = chosenQuestion.choice2;
        choice3.textContent = chosenQuestion.choice3;
        choice4.textContent = chosenQuestion.choice4;
        questionList.style.visibility = "visible";
    } else {
        questionList.style.visibility = "hidden";
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
    resetButton.disabled = false;
    setScore()
    questionList.style.visibility = "hidden";
    gameOver = true;
}

//called if game over condition is met
function endGame() {
    welcomeText.textContent = "Time's Up!";
    startButton.disabled = false;
    resetButton.disabled = false;
    setScore()
    questionList.style.visibility = "hidden";
    gameOver = true;
}

// Updates win count on screen and sets win count to client storage
function setScore() {
    score.textContent = scoreCounter;
    var userInput = window.prompt("You scored " + scoreCounter + ". Enter your initials:");
    localStorage.setItem("scoreCount", scoreCounter);
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
    timerCount = 45;
    displayScore();
}

//calls resetGame function when clicked
resetButton.addEventListener("click", resetGame);

function checkChoice(event) {
    // console.log(event.target.textContent);
    if (timerCount === 0) {
        return;
    }
    if (event.target.textContent === chosenQuestion.correctChoice && !gameOver) {
        // console.log("checkChoice if statement was hit");
        scoreCounter++;
        chosenQuestion.isUsed = true;
        currentScore++;
        currentQuestion++;
        console.log("currentScore is " + currentScore);
        console.log("currentQuestion is " + currentQuestion);
        checkWin();
        return;
    } else if (event.target.textContent !== chosenQuestion.correctChoice && !gameOver) {
        // console.log("checkChoice else if statement was hit");
        chosenQuestion.isUsed = true;
        timerCount -= 9;
        currentQuestion++;
        console.log("currentScore is " + currentScore);
        console.log("currentQuestion is " + currentQuestion);
        checkWin();
        return;

    }
}

function checkWin() {
    console.log("this is running in checkWin");
    console.log("currentScore is " + currentScore);
    console.log("currentQuestion is " + currentQuestion);
    console.log(questionList.length);
    if (currentQuestion != questionList.length) {
        console.log("rabbit");
        displayQuestion();
    } else {
        console.log("turtle");
        gameOver = true;
    }



}
//checks if selected choice was correct
questionList.addEventListener("click", checkChoice);

