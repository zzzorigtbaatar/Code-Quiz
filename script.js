//variables connecting to elements on page
var startButton = document.querySelector(".start-button");
var submitButton = document.getElementById("submit-button");
var questionList = document.querySelector(".question-list");
var questionTitle = document.querySelector(".question-title");
var timerElement = document.querySelector(".timer-count");
var result = document.querySelector("#result");
var score = document.querySelector("#score");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");

//initial values
var timerCount = 45;
var timer;
var currentQuestion = 0;
var currentScore = 0;

//add more questions later
var questionBank = [
    {
        question: "How do you not increment the variable i by 1?",
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

//runs when page loads
function init(){
    questionList.style.visibility = "hidden";
}

// changes timer element each 1 second
function timerStart() {
    timer = setInterval(function name() {
        timerElement.innerText = timerCount;
        timerCount--;
        if (timerCount < 0) {
            endGame();
        }
    }, 1000);

}

//adds listener to startbutton
startButton.addEventListener("click", function startButton() {
    questionList.style.visibility = "visible";
    timerStart();
    displayQuestion();
})

// adds listener to 4 choices
choice1.addEventListener("click", checkChoice);
choice2.addEventListener("click", checkChoice);
choice3.addEventListener("click", checkChoice);
choice4.addEventListener("click", checkChoice);

//compares value of button clicked with corresponding choice's isCorrect value
function checkChoice() {
    var choice = this.getAttribute("id")
    if (choice === "choice1" && questionBank[currentQuestion].answers[0].isCorrect === false) {
        result.textContent = "Your choice is incorrect.";
        timerCount -= 9;
    } else if (choice === "choice2" && questionBank[currentQuestion].answers[1].isCorrect === false) {
        result.textContent = "Your choice is incorrect.";
        timerCount -= 9;
    } else if (choice === "choice3" && questionBank[currentQuestion].answers[2].isCorrect === false) {
        result.textContent = "Your choice is incorrect.";
        timerCount -= 9;
    } else if (choice === "choice4" && questionBank[currentQuestion].answers[3].isCorrect === false) {
        result.textContent = "Your choice is incorrect.";
        timerCount -= 9;
    } else {
        currentScore++;
        result.textContent = "Your choice is correct.";
    }
    if (currentQuestion < questionBank.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        endGame();
    }
}

//puts up question on page
function displayQuestion() {
    console.log(questionBank[currentQuestion]);
    questionTitle.textContent = questionBank[currentQuestion].question;
    choice1.textContent = questionBank[currentQuestion].answers[0].a;
    choice2.textContent = questionBank[currentQuestion].answers[1].b;
    choice3.textContent = questionBank[currentQuestion].answers[2].c;
    choice4.textContent = questionBank[currentQuestion].answers[3].d;
}

//ends timer interval and puts up score
function endGame() {
    console.log("this was in endGame()")
    clearInterval(timer);
    timerElement.innerText = timerCount;
    questionList.style.visibility = "hidden";
    score.textContent = "You scored: " + (currentScore + " with " + timerCount + " seconds remaining.");
    result.textContent = "Thanks for playing!";

}

//button listener for submitting user score and initials
submitButton.addEventListener("click", function() {
    var userInitial = document.getElementById("user-initial").value;
    //if there is no locally stored quiz-score, previousScore is set to an empty value?
    var previousScore = JSON.parse(localStorage.getItem("quiz-score")) || []
    previousScore.push({user: userInitial, score: currentScore, time: timerCount}) 
    localStorage.setItem("quiz-score", JSON.stringify(previousScore));
})

//calls init function when page script loads
init();