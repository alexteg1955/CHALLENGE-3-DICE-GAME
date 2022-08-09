// for player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// for player 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);

//statement after the end of each game
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins the game";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins the game";
}
else {
    document.querySelector("h1").innerHTML = "This game is a DRAW"
}