// Psuedo code

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

  
  // Event listeners variables

  var containerQuestionEl = document.getElementById("questions");
  var containerStartEl = document.getElementById("wrapper");
  var containerEndEl = document.getElementById("end-screen");
  // var containerScoreEl = document.getElementById("score-banner")
//   var formInitials = document.getElementById("initials")
//   var containerHighScoresEl = document.getElementById("high-score-container")
//   var ViewHighScoreEl = document.getElementById("view-high-scores")
//   var listHighScoreEl = document.getElementById("high-score-list")

// Will configure later 

//   var correctEl = document.getElementById("correct")
//   var wrongEl = document.getElementById("wrong")

 // Buttons

 var btnStartEl = document.getElementById("#start");
 var btnGoBackEl = document.getElementById("#go-back")
 var btnClearScoresEl = document.getElementById("#clear")

 // Timer, question and answer variables

 var questionElement = document.getElementById("questions")
 var answerbuttonsElement = document.getElementById("choices")
 var timerElement = document.getElementById("#time");

  // Time variable

  var timeLeft;

  // Other variables

  var gameOver;

  // High Score

  var highScore = [];

  

// Declare showQuestion function

// Create button event listener to call / execute the function showQuestion

// Link the audio effects to the correct and wrong answers when chosen

// When pressed Start quiz, the function to start presenting the questions should be called


// Same time the timer should start from 75 seconds

var setTime = function () {
    timeleft = 75;
};


// Every time when the player selects a correct answer, the function continues with the next question, without any action. The timer goes on, However if the player selects a wrong answer, the time should deduct 10 seconds from the left time.
// We need to link the Correct audio and Incorrect audio to the corresponding answers - dinamycally

// No validation is needed on the submit form for the name
// Once the function for showQuestion is finished OR the timer ends, the ALL DONE page comes where the end user needs to add their names (no validation required)

// The user initials and Score should be stored in Local storage
// That data should be stored in the Highscores section too

