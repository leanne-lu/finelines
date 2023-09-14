// assign "0" to the "score" variable
let score = 0

// define function:
function checkAnswers() {
    // assign "0" to the "score" variable
    let score = 0;
    let result = 0;

    // assign the quiz elements to the quiz variable: (the path to the quiz)
    let quiz = document.forms.quiz.elements;

    //assign the answer to the question to the answer1 variable:
    answer1 = quiz.colour.value;

    // check the answer to the first question:
    if (answer1 == "pink"){
        score = score + 1;
    }
    else if (answer1 == "yellow"){
        score = score + 2;
    }
    else if (answer1 == "green"){
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    //assign the answer to the question to the answer2 variable:
    answer2 = quiz.animal.value;

    // check the answer to the second question:
    if (answer2 == "turtle"){
        score = score + 1;
    }
    else if (answer2 == "giraffe"){
        score = score + 2;
    }
    else if (answer2 == "dolphin"){
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    //assign the answer to the question to the answer3 variable:
    answer3 = quiz.music.value;

    // check the answer to the third question:
    if (answer3 == "rnb"){
        score = score + 1;
    }
    else if (answer3 == "rock"){
        score = score + 2;
    }
    else if (answer3 == "hiphop"){
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    //assign the answer to the question to the answer4 variable:
    answer4 = quiz.hobby.value;

    // check the answer to the fourth question:
    if (answer4 == "read"){
        score = score + 1;
    }
    else if (answer4 == "exercise"){
        score = score + 2;
    }
    else if (answer4 == "create"){
        score = score + 3;
    }
    else {
        score = score + 4;
    }


    if (score < 6){
    result = "HTML";
    }
    else if (score < 10){
    result = "Python";
    }
    else if (score < 13){
    result = "JavaScript";
    }
    else {
    result = "Java";
    }
    // display the score variable in an alert:
    alert ('The programming language you should learn is ' + result);
    }