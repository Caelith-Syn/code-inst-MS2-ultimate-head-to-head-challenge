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
    })

    runGame("addition");
});



	// function loadGame () {

	// }
	

	function cpuSelection () {
		let choosenIconCpu = Math.random() *2;
		if (cpuSelection === 0) {
			return 'rockChoosenIconCpu'
		} if (cpuSelection === 1) {
			return 'paperChoosenIconCpu'
		} if (cpuSelection === 2) {
			return 'scissorsChoosenIconCpu'
		} else {return 'waiting for selection'}
	}


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














	function showPlayerChoiceRock() {
   	document.getElementById('rockChoosenIconPlayer').style.display = "block";
	hidePlayerChoicePaper();
	hidePlayerChoiceScissors();
	}

	function showPlayerChoicePaper() {
   	document.getElementById('paperChoosenIconPlayer').style.display = "block";
	hidePlayerChoiceRock();
	hidePlayerChoiceScissors();
	}

	function showPlayerChoiceScissors() {
   	document.getElementById('scissorsChoosenIconPlayer').style.display = "block";
	hidePlayerChoiceRock();
	hidePlayerChoicePaper();
	}


function hidePlayerChoiceRock() {
   document.getElementById('rockChoosenIconPlayer').style.display = "none";
}

function hidePlayerChoicePaper() {
   document.getElementById('paperChoosenIconPlayer').style.display = "none";
}

function hidePlayerChoiceScissors() {
   document.getElementById('scissorsChoosenIconPlayer').style.display = "none";
}