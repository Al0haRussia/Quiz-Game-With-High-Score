// Delcared variables
var highScore = document.querySelector("#highscores");
var reset = document.querySelector("#reset");
var back = document.querySelector("#back");

// Used to reset the highscores
reset.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}

// Used to go back to the quiz
back.addEventListener("click", function () {
    window.location.replace("./index.html");
});