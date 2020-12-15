// <- Timer, loop through questions ->

var i = 0;
var timer = 70;
var timerInterval;
var messageDiv = document.querySelector("#message");
var answerValidationDiv = document.querySelector("#answerValidation");
var storedScores;
var scoreList = [];
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");

function setTime() {
    document.querySelector("#time").textContent = "Time: " + timer + "s";
     timerInterval = setInterval(function () {
        timer--;
        document.querySelector("#time").textContent = "Time: " + timer + "s";

        if (timer <= 0) {
            clearInterval(timerInterval);
            alert("Out of Time");
            endOfQuiz();
        }
    }, 1000);
    return timer;
}

function endOfQuiz() {
    document.getElementById("time").style.display ="none";
    var scoreTag = document.createElement("h1");
    var inputTag = document.createElement("input");
    var submitButton = document.createElement("button");
    document.getElementById("question").textContent = "All Done!";
    answerOne.remove();
    answerTwo.remove();
    answerThree.remove();
    answerFour.remove();
    document.body.children[1].appendChild(scoreTag);
    document.getElementsByTagName("h1")[0].setAttribute("id", "score");
    document.getElementById("score").textContent = "Your final score is: " + timer;
    document.body.children[1].appendChild(inputTag);
    document.getElementsByTagName("input")[0].setAttribute("id", "input-field");
    submitButton.textContent = "Submit";
    document.body.children[1].appendChild(submitButton);
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        var highScoreText = new Object();
        highScoreText.name = inputTag.value.trim();
        highScoreText.newScore = timer;
        storeScores(highScoreText);
        window.location.href = "./highScore.html";
    });
}

function setQuestions() {
    answerOne.hidden = false;
    answerTwo.hidden = false;
    answerThree.hidden = false;
    answerFour.hidden = false;

    document.getElementById("startButton").hidden = true;

    if (i === questions.length) {
        clearInterval(timerInterval);
        endOfQuiz();
    } else {
        document.getElementById("question").textContent = questions[i]["title"];
        document.getElementById("answerOne").textContent = "1. " +
            questions[i]["choices"][0];
        document.getElementById("answerTwo").textContent = "2. " +
            questions[i]["choices"][1];
        document.getElementById("answerThree").textContent = "3. " +
            questions[i]["choices"][2];
        document.getElementById("answerFour").textContent = "4. " +
            questions[i]["choices"][3];
    }
}

function storeScores(highScoreText) {
    tempArray = JSON.parse(localStorage.getItem("scores"));
    if (tempArray === null) {
        scoreList.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(scoreList));
    } else {
        tempArray.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(tempArray));
    }
}

document.getElementById("startButton").addEventListener("click", setQuestions);
document.getElementById("startButton").addEventListener("click", setTime);
document.getElementById("startButton").addEventListener("click", function () {
    messageDiv.textContent = "";
    answerValidationDiv.style.display = "none";
});

answerOne.hidden = true;
answerTwo.hidden = true;
answerThree.hidden = true;
answerFour.hidden = true;

document.getElementById("answerOne").addEventListener("click", function () {
    answerValidationDiv.style.display = "";
    setTimeout(function () {
        answerValidationDiv.style.display = "none";
    }, 2500);
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        answerValidationDiv.textContent = "Correct!";
    } else {
        answerValidationDiv.textContent = "Wrong!";
        timer -= 10;
    }
    i++;
    setQuestions();
});

document.getElementById("answerTwo").addEventListener("click", function () {
    answerValidationDiv.style.display = "";
    setTimeout(function () {
        answerValidationDiv.style.display = "none";
    }, 2500);
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        answerValidationDiv.textContent = "Correct!";
    } else {
        answerValidationDiv.textContent = "Wrong!";
        timer -= 10;
    }
    i++;
    setQuestions();
});

document.getElementById("answerThree").addEventListener("click", function () {
    answerValidationDiv.style.display = "";
    setTimeout(function () {
        answerValidationDiv.style.display = "none";
    }, 2500);
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        answerValidationDiv.textContent = "Correct!";
    } else {
        answerValidationDiv.textContent = "Wrong!";
        timer -= 10;
    }
    i++;
    setQuestions();
});

document.getElementById("answerFour").addEventListener("click", function () {
    answerValidationDiv.style.display = "";
    setTimeout(function () {
        answerValidationDiv.style.display = "none";
    }, 2500);
    if (questions[i]["choices"][3] === questions[i]["answer"]) {
        answerValidationDiv.textContent = "Correct!";
    } else {
        answerValidationDiv.textContent = "Wrong!";
        timer -= 10;
    }
    i++;
    setQuestions();
});

