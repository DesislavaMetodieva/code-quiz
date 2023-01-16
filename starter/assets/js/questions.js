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

var arrayList = [q1, q2, q3, q4, q5];
