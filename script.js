//variables connecting to elements on page
var startButton = document.querySelector(".start-button");
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

// var questionBank = [
//     {
//         question: "Inside which element do we put Javascript?",
//         answers: [
//             {a: "<js>", isCorrect: false}, 
//             {b: "<scripting>", isCorrect: false}, 
//             {c: "<script>", isCorrect: true}, 
//             {d: "<javascript>", isCorrect: false}
//         ]
//     },
//     {
//         question: "What is the correct syntax for referring to an external script called 'abc.js'?",
//         answers: [
//             {a: "<script href='abc.js>", isCorrect: false}, 
//             {b: "<script name='abc.js'>", isCorrect: false}, 
//             {c: "<script src='abc.js'>", isCorrect: true}, 
//             {d: "None of the above", isCorrect: false}
//         ]
//     },
//     {
//         question: "What is mean by 'this' keyword in javascript?",
//         answers: [
//             {a: "It refers to the current object", isCorrect: true}, 
//             {b: "It refers to the previous object", isCorrect: false}, 
//             {c: "It is variable which contains value", isCorrect: false}, 
//             {d: "None of the above", isCorrect: false}
//         ]
//     },
//     {
//         question: "What are variables used for in JavaScript Programs?",
//         answers: [
//             {a: "Storing numbers, dates, or other values", isCorrect: true}, 
//             {b: "Varying randomly", isCorrect: false}, 
//             {c: "Causing high-school algebra flashbacks", isCorrect: false}, 
//             {d: "None of the above", isCorrect: false}
//         ]
//     },
//     {
//         question: "Which is not an example of a datatype?",
//         answers: [
//             {a: "boolean", isCorrect: false}, 
//             {b: "variable", isCorrect: true}, 
//             {c: "string", isCorrect: false}, 
//             {d: "number", isCorrect: false}
//         ]
//     }
// ]

//questions and corresponding choices
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

// changes timer element each 1 second
function timerStart() {
    timer = setInterval(function name() {
        timerElement.innerText = timerCount;
        timerCount--;
        if (timerCount < 0) {
            endGame()
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
choice1.addEventListener("click", checkChoice)
choice2.addEventListener("click", checkChoice)
choice3.addEventListener("click", checkChoice)
choice4.addEventListener("click", checkChoice)

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





//redoing entire code

//links elements on the document
// var welcomeText = document.querySelector(".welcome-text");
// var score = document.querySelector(".score")
// var startButton = document.querySelector(".start-button");
// var resetButton = document.querySelector(".reset-button");
// var timerElement = document.querySelector(".timer-count");
// var questionList = document.querySelector(".question-list");
// var questionTitle = document.querySelector(".question-title");
// var choice1 = document.querySelector("#choice1");
// var choice2 = document.querySelector("#choice2");
// var choice3 = document.querySelector("#choice3");
// var choice4 = document.querySelector("#choice4");
// var result = document.querySelector("#result");
// var gameOver = false;
// var currentQuestion = 0;
// var currentScore = 0;

// //initial values for variables
// var chosenQuestion;
// var scoreCounter = 0;
// var timer;
// var timerCount = 0;

// //creates questions object literal that contains q objects
// //q template
// // q : {question: 'insert question here?', choice1: "insert choice1" , choice2: "insert choice2" , choice3: "insert choice3" , choice4: "insert choice4" , correctChoice: "insert correct choice"}
// //Reference: https://stackoverflow.com/a/37077847
// // var questions = {
// //     q1: { question: 'How do you not increment variable i by 1?', choice1: "i++", choice2: "i+1", choice3: "i += 1", choice4: "i = 1", correctChoice: "i = 1", isUsed: false },
// //     q2: { question: 'How do you add an element to an existing one?', choice1: ".append()", choice2: ".glue()", choice3: ".createNewElement()", choice4: ".add()", correctChoice: ".append()", isUsed: false },
// //     q3: { question: 'What is not a data type?', choice1: "integer", choice2: "string", choice3: "boolean", choice4: "count", correctChoice: "count", isUsed: false }
// // }

// //reformatted list of questions
// var questions = [
//     {
//         question: "How do you not increment the variable i by 1?",
//         answers: [
//             { a: "i++", isCorrect: false },
//             { b: "i + 1", isCorrect: false },
//             { c: "i += 1", isCorrect: false },
//             { d: "i = 1", isCorrect: true }
//         ]
//     },
//     {
//         question: "How do you add an element to an existing one?",
//         answers: [
//             { a: ".append()", isCorrect: true },
//             { b: ".glue()", isCorrect: false },
//             { c: ".add()", isCorrect: false },
//             { d: ".createNewElement()", isCorrect: false }
//         ]
//     },
//     {
//         question: "What is not a data type?",
//         answers: [
//             { a: "integer", isCorrect: false },
//             { b: "string", isCorrect: false },
//             { c: "boolean", isCorrect: false },
//             { d: "count", isCorrect: true }
//         ]
//     }
// ]



// //array of questions to ask
// // var allQuestions = [];

// // //inserts questions into allQuestions array
// // for (var key in questions) {
// //     allQuestions.push(questions[key]);
// // }

// // add fresh questions to question list
// // function refillQuestionList() {
// //     allQuestions = [];
// //     for (var key in questions) {
// //         allQuestions.push(questions[key]);
// //     }
// // }

// //runs when the page is loaded
// function init() {
//     displayScore();
//     console.log("this is in init " + questions[currentQuestion].question);
//     displayQuestion();
// }

// //displays locally stored high score if there is any
// function displayScore() {
//     var storedScore = localStorage.getItem("scoreCount");
//     if (storedScore === null) {
//         scoreCounter = 0;
//     } else {
//         scoreCounter = storedScore;
//     }
//     questionList.style.visibility = "hidden";
//     score.textContent = scoreCounter;
//     // score.textContent = scoreCounter + " (High Score)";
// }


// function startGame() {
//     welcomeText.textContent = "Do your best!"
//     // refillQuestionList();
//     gameOver = false;
//     timerCount = 45;
//     startButton.disabled = true;
//     resetButton.disabled = true;
//     questionList.style.visibility = "visible";
//     startTimer();
//     displayQuestion();
// }


// //displays question on screen
// function displayQuestion() {
//     console.log(questions[chosenQuestion]);
//     questionTitle.textContent = questions[chosenQuestion].question;
//     questionTitle.textContent = "test";
//     choice1.textContent = questions[currentQuestion].answers[0].a;
//     choice2.textContent = questions[currentQuestion].answers[1].b;
//     choice3.textContent = questions[currentQuestion].answers[2].c;
//     choice4.textContent = questions[currentQuestion].answers[3].d;
// }

// function startTimer() {
//     timer = setInterval(function () {
//         timerCount--;
//         timerElement.textContent = timerCount;
//         if (timerCount >= 0) {
//             if (gameOver && timerCount > 0) {
//                 clearInterval(timer);
//                 winGame();
//             }
//         }
//         if (timerCount === 0) {
//             clearInterval(timer);
//             endGame();
//         }
//     }, 1000);
// }

// //called if win condition is met
// // function winGame() {
// //     welcomeText.textContent = "You got them all! Nice!";
// //     startButton.disabled = false;
// //     resetButton.disabled = false;
// //     setScore()
// //     questionList.style.visibility = "hidden";
// //     gameOver = true;
// // }

// //called if game over condition is met
// function endGame() {
//     // welcomeText.textContent = "Time's Up!";
//     // startButton.disabled = false;
//     // resetButton.disabled = false;
//     // setScore()
//     // questionList.style.visibility = "hidden";
//     // gameOver = true;
//     clearInterval(timer);
//     timerElement.innerText = timerCount;
//     questionList.style.visibility = "visible";
//     score.textContent = "Your scored " + currentScore + " with " + timerCount + "remaining";
//     setScore();

// }

// // Updates win count on screen and sets win count to client storage
// function setScore() {
//     score.textContent = scoreCounter;
//     var userInput = window.prompt("You scored " + scoreCounter + ". Enter your initials:");
//     localStorage.setItem("scoreCount", scoreCounter);
//     localStorage.setItem("initials", userInput);
// }

// //calls startGame function when clicked
// startButton.addEventListener("click", startGame);

// //call init() when page script is run
// init();


// // resets score and displays new value
// function resetGame() {
//     scoreCounter = 0;
//     welcomeText.textContent = "Test your Javascript knowledge!";
//     timerCount = 45;
//     displayScore();
// }

// //calls resetGame function when clicked
// resetButton.addEventListener("click", resetGame);




// choice1.addEventListener("click", checkChoice)
// choice2.addEventListener("click", checkChoice)
// choice3.addEventListener("click", checkChoice)
// choice4.addEventListener("click", checkChoice)

// function checkChoice() {
//     var choice = this.getAttribute("id")
//     if (choice === "choice1" && questions[currentQuestion].choices[0].isCorrect === false) {
//         result.textContent = "Your choice is incorrect.";
//         timerCount -= 9;
//     } else if (choice === "choice2" && questions[currentQuestion].choices[1].isCorrect === false) {
//         result.textContent = "Your choice is incorrect.";
//         timerCount -= 9;
//     } else if (choice === "choice3" && questions[currentQuestion].choices[2].isCorrect === false) {
//         result.textContent = "Your choice is incorrect.";
//         timerCount -= 9;
//     } else if (choice === "choice4" && questions[currentQuestion].choices[3].isCorrect === false) {
//         result.textContent = "Your choice is incorrect.";
//         timerCount -= 9;
//     } else {
//         currentScore++;
//         result.textContent = "Your choice is correct.";
//     }
//     if (currentQuestion < questions.length - 1) {
//         currentQuestion++;
//         displayQuestion();
//     } else {
//         endGame();
//     }
// }

// // function checkWin() {
// //     console.log("this is running in checkWin");
// //     console.log("currentScore is " + currentScore);
// //     console.log("currentQuestion is " + currentQuestion);
// //     console.log(questionList.length);
// //     if (currentQuestion != questionList.length) {
// //         console.log("rabbit");
// //         displayQuestion();
// //     } else {
// //         console.log("turtle");
// //         gameOver = true;
// //     }



// // }
// //checks if selected choice was correct
// questionList.addEventListener("click", checkChoice);

