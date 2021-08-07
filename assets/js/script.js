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
	

	// function cpuSelection () {
	// 	let choosenIconCpu = Math.random() *2;
	// 	if (cpuSelection === 0) {
	// 		return 'rockChoosenIconCpu'
	// 	} if (cpuSelection === 1) {
	// 		return 'paperChoosenIconCpu'
	// 	} if (cpuSelection === 2) {
	// 		return 'scissorsChoosenIconCpu'
	// 	} else {return 'waiting for selection'}
	// }


	// function startTimer () {

	// }



// function checkResult(){
//     var div1 = document.getElementById('rockChoosenIconPlayer');
//     if (div1.style.display === 'none') {
//         div1.style.display = 'block'
//     } else {
//         div1.style.display = 'none'
//     }
// }

// function checkResult() { 
// 	document.getElementById('rockChoosenIconPlayer').setAttribute('none', 'display:block'); 
// }

	function checkResult() {
alert('This is working!')
}

	
	// function updateScore () {

	// }