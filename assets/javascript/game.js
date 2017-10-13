//Global Variables
var wins = 0;
var losses = 0;
var currentNumber = 0;
var currentGuess = 0;
var difficulty = 4;




// Function game start
function gameStart() {
	// get random number between 40 - 90
	currentNumber += Math.floor(Math.random() * (90 - 40 + 1)) + 40;
	console.log(currentNumber);
	$("#goalNumber").text(currentNumber);

	//clear dice div
	$("#dice").empty();

	//populate dice div with images depending on difficulty
	for (var i = 0; i < difficulty; i++) {
	//designate new element as <img>
	var imageDice = $("<img>");
	//add class attribute
	imageDice.addClass("dice-image");
	//add source attribute
	imageDice.attr("src", "assets/images/12-Sided Die.png");
	//assign random number between 1 and 12 to each dice
	imageDice.attr("data-dicevalue",  Math.floor(Math.random() * (12 - 1 + 1)) + 1);
	//add completed crystal to div
	$("#dice").append(imageDice);
}


}

function clear() {
	currentGuess = 0;
	$("#userGuess").text(currentGuess);
	currentNumber = 0;

}
gameStart();
initClick();



// Onclick function
function initClick() {
$(".dice-image").on("click", function() {
 	//get dice value from img data
 	var crystalValue = ($(this).attr("data-dicevalue"));
 	crystalValue = parseInt(crystalValue);
	//add dice value to currentGuess
	currentGuess += crystalValue
	$("#userGuess").text(currentGuess);

	if (currentGuess > currentNumber) {
		// game over
		// alert("You Lose!");
		losses++;
		$("#lossDisplay").text(losses);
		clear();
		gameStart();
		initClick();
	}else if (currentGuess === currentNumber){
		//game over
		// alert("You Win!");
		wins++;
		$("#winDisplay").text(wins);
		clear();
		gameStart();
		initClick();
	}
})

}
