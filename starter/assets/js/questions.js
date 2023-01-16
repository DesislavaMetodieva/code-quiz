// Declare variable array for the questions

// 5 questions with 4 possible answers - 1 correct and 3 wrongs

var currentQuestions = 0;
var score = 0;

var questions = [
    { q: 'Arrays in Javascript can be used to store __________.', 
      a: '4. all of the above', 
      choices: [{choice: '1. numbers'}, {choice: '2. booleans'}, {choice: '3. strings'}, {choice: '4. all of the above'}]
    },
    { q: 'Inside which HTML element do we put the javascript?', 
      a: '3. <script>', 
      choices: [{choice: '1. <h1>'}, {choice: '2. <js>'}, {choice: '3. <script>'}, {choice: '4. <head>'}]
    },
    { q: 'What syntax would call a function?', 
      a: '4. function()', 
      choices: [{choice: '1. var function'}, {choice: '2. function'}, {choice: '3. call function'}, {choice: '4. function()'}]
    },
    { q: 'What does DOM stand for?', 
      a: '2. Document Object Model', 
      choices: [{choice: '1. Do Overnight Modules'}, {choice: '2. Document Object Model'}, {choice: '3. Divas Obviously Model'}, {choice: '4. Do Oo Mo'}]
    },
    { q: 'Commonly user data type DO NOT include  __________.?', 
      a: '2. booleans', 
      choices: [{choice: '1. alerts'}, {choice: '2. booleans'}, {choice: '3. string'}, {choice: '4. integers'}]
    },
  ];


  var containerQuestionEl = document.getElementById("questions");
  var containerStartEl = document.getElementById("start-screen");
  var containerEndEl = document.getElementById("end-screen");
  // var containerScoreEl = document.getElementById("score-banner")
  var formInitials = document.getElementById("initials")
  var containerHighScoresEl = document.getElementById("highscores")
  var ViewHighScoreEl = document.getElementById("scores")
//   var listHighScoreEl = document.getElementById("high-score-list")

// Will configure later the text below the answers to show correct or wrong depending on the user choosen answer

//   var correctEl = document.getElementById("correct")
//   var wrongEl = document.getElementById("wrong")

 // Buttons

var btnStartEl = document.getElementById("#start");
var btnGoBackEl = document.getElementById("#go-back")
var btnClearScoresEl = document.getElementById("#clear")

 // Timer, question and answer variables

var questionElement = document.getElementById("questions");
var answerbuttonsElement = document.getElementById("choices");
var timerElement = document.getElementById("#time");

// High Score

var highScore = [];

// Other variables

var gameOver;

// timerElement.innerText = 0;

var timeLeft;

var setTime = function () {
    timeleft = 75;

    var timercheck = setInterval(function() {
        timerElement.innerText = timeleft;
        timeleft--
    
        if (gameOver) {
            clearInterval(timercheck);
        }
       
        if (timeleft < 0) {
            showScore()
            timerElement.innerText = 0
            clearInterval(timercheck)
        }
    
        }, 1000)
    };




  

// Declare startGame function

var startGames = function() {

//add classes to show/hide start and quiz screen

    containerStartEl.classList.add('hide');
    containerStartEl.classList.remove('show');
    containerQuestionEl.classList.remove('hide');
    containerQuestionEl.classList.add('show');
    setTime()
    setQuestion()

};

  //set next question for quiz

  var setQuestion = function() {
    resetAnswers();
    displayQuestion();
};

 //remove answer buttons
    var resetAnswers = function() {
        while (answerbuttonsElement.firstChild) {
            answerbuttonsElement.removeChild(answerbuttonsElement.firstChild)
        };
    };

// Link the audio effects to the correct and wrong answers when chosen

// When pressed Start quiz, the function to start presenting the questions should be called

// We need to link the Correct audio and Incorrect audio to the corresponding answers - dinamycally



// No validation is needed on the submit form for the name

// Once the function for showQuestion is finished OR the timer ends, the ALL DONE page comes where the end user needs to add their names (no validation required)

// The user initials and Score should be stored in Local storage

// showScore();

// That data should be stored in the Highscores section too

// createHighScore ();

// on start click, start game
// btnStartEl.addEventListener("click", startGames);
// console.log(mewo);

// //on submit button -- enter or click
// formInitials.addEventListener("submit", createHighScore);

// //when view high-scores is clicked
// ViewHighScoreEl.addEventListener("click", displayHighScores);

// //Go back button
// btnGoBackEl.addEventListener("click", renderStartPage);

// //clear scores button
// btnClearScoresEl.addEventListener("click", clearScores);

