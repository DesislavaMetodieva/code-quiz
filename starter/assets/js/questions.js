// 5 questions with 4 possible answers - 1 correct and 3 wrongs

// Question objects

var q1 = {
    title: 'Arrays in Javascript can be used to store __________.', 
    choices: ["1. numbers", "2. booleans", "3. strings", "4. all of the above"],
    correctAnswer: 3
};

var q2 = {
    title: "Inside which HTML element do we put the javascript?",
    choices: ["1. <h1>", "2. <js>", "3. <script>", "4. <head>"],
    correctAnswer: 2
};

var q3 = {
    title: 'What syntax would call a function?',
    choices: ["1. var function", "2. function", "3. call function", "4. function()"],
    correctAnswer: 3
}

var q4 = {
    title: 'What does DOM stand for?',
    choices: ["1. Do Overnight Modules", "2. Document Object Model", "3. Divas Obviously Model", "4. Do Oo Mo"],
    correctAnswer: 1
}

var q5 = {
    title: "Commonly user data type DO NOT include  __________.?",
    choices: ["1. alerts", "2. booleans", "3. string", "4. integers"],
    correctAnswer: 1
}

var arrayList;
arrayList = [q1, q2, q3, q4, q5];

// Variables to create button elements for options

var choice1 = document.createElement("button");
var choice2 = document.createElement("button");
var choice3 = document.createElement("button");
var choice4 = document.createElement("button");

choice1.setAttribute("id", 0);
choice2.setAttribute("id", 1);
choice3.setAttribute("id", 2);
choice4.setAttribute("id", 3);

//An array of option buttons
var arrayChoices = [choice1, choice2, choice3, choice4];

//A variable for question number
var currentQuestIndex = 0;

// DOM elements

var timerEl = document.getElementById("time");
var startScreenEl = document.getElementById("start-screen");
var startButtonEl = document.getElementById("start");
var questEl = document.getElementById("questions");
var titleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var endEl = document.getElementById("end-screen");
var scoreEl = document.getElementById("final-score");
var initialsPlayer = document.getElementById("initials");
var submitButtonEl = document.getElementById("submit");
var feedbackEl = document.getElementById("feedback");



//Quiz time is 75 seconds
var timeLeft = 75;


// Event listener for when user clicks on Start Quiz
startButtonEl.addEventListener("click", startGame);

// Event listener for when user selects one of the dropdown choices
for (var i = 0; i < arrayChoices.length; i++) {
    arrayChoices[i].addEventListener("click", answerValidation);
};

// Function to begin 
function startGame() {
  var timeInterval = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft === 0) {
          clearInterval(timeInterval);
      }
  }, 
  
  1000);

  function pauseTimer() {
    clearInterval(timeInterval);
  };

  startGame.pauseTimer = pauseTimer;
  startScreenEl.remove();
  renderQuestion();
};


//Function to render questions
var renderQuestion = () => {
  questEl.setAttribute("class", "display");
  var question = arrayList[currentQuestIndex];
  titleEl.textContent = question.title;
  
  for (var i = 0; i < arrayChoices.length; i++) {
    choicesEl.appendChild(arrayChoices[i]);
    arrayChoices[i].textContent = question.choices[i];
  };
};

// Show next question function
const nextQuestion = () => {
    currentQuestIndex = currentQuestIndex + 1;
    if (currentQuestIndex < arrayList.length) {

        renderQuestion();

    } else {
        
        questEl.remove();
        feedbackEl.remove();
        endEl.setAttribute("class", "display");
        startGame.pauseTimer();
        scoreEl.textContent = timeLeft;
    };
};

//Function to display question feedback
function answerValidation(event) {
  var userAnswer = event.target.id;

  //  validation if the user selects the correct answer and if I am targetting the correct element from the DOM
  // console.log(userAnswer);

  feedbackEl.setAttribute("class", "feedback");
  if (userAnswer == arrayList[currentQuestIndex].correctAnswer){
    feedbackEl.textContent = "Correct!";
    correctAudio();
  } else {
    feedbackEl.textContent = "Wrong!";
    incorrectAudio();
    timeLeft = timeLeft - 10;
  }; 

  nextQuestion();
};

//Function to play correct sound when answer is correct
var correctAudio = () => {
    var audio = new Audio('./assets/sfx/correct.wav');
    audio.play();
};

// Function to play incorrect sound when answer is incorrect
var incorrectAudio = () => {
  var audio = new Audio('./assets/sfx/incorrect.wav');
  audio.play();
};