document.addEventListener("DOMContentLoaded", function() {
	let buttons = document.getElementsByTagName("button");
	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-type") === "submit") {
				checkAnswer();
			} else {
				let gameType = this.getAttribute("data-type");
				runGame(gameType);
			}
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
    	if (event.key === "Enter") {
    		checkAnswer();
    	}
    });

    runGame("addition");
});








function loadGame (gameType) {
}








/** This code begins the countdown timer when "Play" is clicked * */
function startTimer() {
	var timeleft = 60;
	var downloadTimer = setInterval(function(){
	if(timeleft <= 0){
	clearInterval(downloadTimer);
	document.getElementById("countdown-timer").innerHTML = "Times Up";
	} else {
	document.getElementById("countdown-timer").innerHTML = timeleft;
	}
	timeleft -= 1;
	}, 1000);
}








function checkAnswer() {
	
	// alert('This is working!')

/** This code targets the display element choices * */
    let playerRock = showPlayerChoiceRock();
    let playerPaper = showPlayerChoicePaper();
    let playerScissors = showPlayerChoiceScissors();
    let cpuRock = showCpuChoiceRock();
    let cpuPaper = showCpuChoicePaper();
    let cpuScissors = showCpuChoiceScissors();








/** This code creates draw statements * */
    if ('playerRock' === 'cpuRock') {
      alert("It's a draw.");
    } else if ('playerPaper') {
      alert("It's a draw.");
    } else if ('playerScissors') {
      alert("It's a draw.");
    } 








/** This code creates win statements * */
    else if ('playerRock') {
        incrementPlayerScore ();
        alert("You win");
    } else if ('playerScissors') {
        incrementPlayerScore ();
        alert("You win");
    } else if ('playerPaper') {
        incrementPlayerScore ();
        alert("You win");
    }








/** This code creates lose statements * */
    else if ('playerScissors') {
        incrementCpuScore ();
        alert("You win");
    } else if ('playerPaper') {
        incrementCpuScore ();
        alert("You win");
   	} else if ('playerRock') {
        incrementCpuScore ();
        alert("You win");
   	} 








/** This code creates a warning message if something dose not work * */
   	else {
        alert(`Something is broken`);
    }

}








// function checkResult() {
// 	alert('This is working!')
// }








function incrementPlayerScore () {

/** This code will add 1 point to the players score each time the player wins a round * */
	let playerOldScore = parseInt(document.getElementById('player-score').innerText);
	document.getElementById('player-score').innerText = ++playerOldScore;

}

function incrementCpuScore () {

/** This code will add 1 point to the computers score each time the computer wins a round * */
	let cpuOldScore = parseInt(document.getElementById('computer-score').innerText);
	document.getElementById('computer-score').innerText = ++cpuOldScore;

}








/** This code displays the computers selection on the right hand side of the screen * */
function showCpuChoiceRock() {
   	document.getElementById('rockChoosenIconCpu').style.display = "block";
	hideCpuChoicePaper();
	hideCpuChoiceScissors();
}

function showCpuChoicePaper() {
   	document.getElementById('paperChoosenIconCpu').style.display = "block";
	hideCpuChoiceRock();
	hideCpuChoiceScissors();
}

function showCpuChoiceScissors() {
   	document.getElementById('scissorsChoosenIconCpu').style.display = "block";
	hideCpuChoiceRock();
	hideCpuChoicePaper();
}





/** This code generates a random selcetion for the computer to display * */
function cpuSelection() {
    let cpuChoice = Math.floor(Math.random()*3);
    if (cpuChoice === 0) {
    return showCpuChoiceRock();
    } else if (cpuChoice === 1) {
   	return showCpuChoicePaper();
    } else if (cpuChoice === 2) {
    return  showCpuChoiceScissors();
    } else {
    return "Make a selection to begin the game";
    }
}





/** This code displays the players selection on the left hand side of the screen * */
function showPlayerChoiceRock() {
   	document.getElementById('rockChoosenIconPlayer').style.display = "block";
	hidePlayerChoicePaper();
	hidePlayerChoiceScissors();
	cpuSelection();
	}

function showPlayerChoicePaper() {
   	document.getElementById('paperChoosenIconPlayer').style.display = "block";
	hidePlayerChoiceRock();
	hidePlayerChoiceScissors();
	cpuSelection();
} 

function showPlayerChoiceScissors() {
   	document.getElementById('scissorsChoosenIconPlayer').style.display = "block";
	hidePlayerChoiceRock();
	hidePlayerChoicePaper();
	cpuSelection ();
}






/** This code hides the players selection on the left hand side of the screen * */
function hidePlayerChoiceRock() {
   document.getElementById('rockChoosenIconPlayer').style.display = "none";
}

function hidePlayerChoicePaper() {
   document.getElementById('paperChoosenIconPlayer').style.display = "none";
}

function hidePlayerChoiceScissors() {
   document.getElementById('scissorsChoosenIconPlayer').style.display = "none";
}






/** This code hides the computers selection on the right hand side of the screen * */
function hideCpuChoiceRock() {
   document.getElementById('rockChoosenIconCpu').style.display = "none";
}

function hideCpuChoicePaper() {
   document.getElementById('paperChoosenIconCpu').style.display = "none";
}

function hideCpuChoiceScissors() {
   document.getElementById('scissorsChoosenIconCpu').style.display = "none";
}


























