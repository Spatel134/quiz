// <- Highscores page ->
var highScoreList = document.querySelector("#highScores");
var backButton = document.querySelector("#go-back");
var clearHighScores = document.querySelector("#clear-highscores");

forTheScores();

function forTheScores() {
    storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        scoreList = storedScores;
    }
    createScores();
}

function clearAll() {
    window.localStorage.clear();
}

function createScores() {
    if (storedScores !== null) {
        scoreList.sort(function (a, b) {
            return a.newScore - b.newScore;
        });
        scoreList.reverse(function (a, b) {
            return a.newScore - b.newScore;
        });

        for (i = 0; i < scoreList.length; i++) {
            var scoreListItem = scoreList[i];
            var tr = document.createElement("tr");

            var positionCell = document.createElement("th");
            positionCell.setAttribute("scope", "row")
            positionCell.append(document.createTextNode(i + 1));

            var nameCell = document.createElement("td");
            nameCell.append(document.createTextNode(scoreListItem.name));

            var scoreCell = document.createElement("td");
            scoreCell.append(document.createTextNode(scoreListItem.newScore));

            tr.setAttribute("tr-index", i);
            document.getElementById("highScores").appendChild(tr);
            tr.appendChild(positionCell);
            tr.appendChild(nameCell);
            tr.appendChild(scoreCell);
        }
    }
}

clearHighScores.addEventListener("click", function () {
    window.location.href = "./highScore.html";
    clearAll();
});

backButton.addEventListener("click", function () {
    window.location.href = "./index.html";
});
