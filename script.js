var highscore = document.querySelector("#highscore");
highscore.textContent = "View Highscore";
highscore.style = "font-weight: bold";


var secondsLeft = 60;
var time = document.querySelector("#timer");

function prepareRead() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = "Time: " + secondsLeft;    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

prepareRead();