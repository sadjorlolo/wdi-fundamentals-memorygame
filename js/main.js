var cards = [{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"},
	{rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"},
	{rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"},
	{rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"}];

var cardsInPlay = [];

var gamesPlayed;
var matchesFound;

var totalGames;
var totalMatch;

// set initial values for total games and matches found at load
//if localstorage does not exist, set variables to 0
//else, localstorage.

if(localStorage.getItem('totalGames') === null) {
	gamesPlayed = 0;
}
else {
	gamesPlayed = localStorage.getItem('totalGames');
}

if(localStorage.getItem('totalMatch') === null) {
	matchesFound = 0;
}
else {
	matchesFound = localStorage.getItem('totalMatch');
}


var gamesPlayedText = document.getElementById('games-played');
gamesPlayedText.innerHTML = gamesPlayed;


var matchesFoundText = document.getElementById('matches-found');
matchesFoundText.innerHTML = matchesFound;



var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		gamesPlayed++;
		matchesFound++;
		gamesPlayedText.innerHTML = gamesPlayed;
		matchesFoundText.innerHTML = matchesFound;

		totalGames = gamesPlayed;
		localStorage.setItem('totalGames', totalGames);
		totalMatch = matchesFound;
		localStorage.setItem('totalMatch', totalMatch);
	}
	else {
		alert("Sorry, try again.");
		gamesPlayed++;
		gamesPlayedText.innerHTML = gamesPlayed;

		totalGames = gamesPlayed;
		localStorage.setItem('totalGames', totalGames);

	}
}

var flipCard = function() {

	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute('src', cards[cardId].cardImage);

	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
}


var createBoard = function () {
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
}

createBoard();

// Reset button //

var resetPage = function() {
	window.location.reload();
}

var resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetPage);

// Reset localStorage and clear game //

var resetGame = function() {
	localStorage.clear();
	window.location.reload();
}

var clearButton = document.getElementById('clear-game');
clearButton.addEventListener('click', resetGame);





