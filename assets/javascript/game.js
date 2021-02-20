// Array that defines the words and selects a random word
var gameArray = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var randomLetter ="";
var gameWins = 0;
var gameLosses = 0;
var guessesLeft =15;
var playerGuess ="";

document.onload = letterPicker();

document.onkeyup = guessCheck();
 
function letterPicker(){
    randomLetter = gameArray[Math.floor(Math.random() *gameArray.length)];
    document.getElementById("previousGuesses").innerHTML = ""  
    console.log(randomLetter)
}

document.onkeyup=function(event){
    playerGuess = event.key.toLowerCase();
    console.log(playerGuess)
    guessCheck();
}

function guessCheck(){
   
    if(playerGuess === randomLetter){
        gameWins++
        console.log("win")
        letterPicker();
        document.getElementById("wins").innerHTML = gameWins

    }else{
        wrongGuess();
    }
}
function wrongGuess(){
    if(guessesLeft === 1){
    console.log("game over")
    gameLosses++
    resetGame();
    }else{
        guessesLeft--;
        document.getElementById("previousGuesses").prepend(" " + playerGuess);
        document.getElementById("guessesRemains").innerHTML = guessesLeft


    }
}
function resetGame(){
    guessesLeft = 15;
    document.getElementById("previousGuesses").innerHTML = ""  
    document.getElementById("guessesRemains").innerHTML = guessesLeft



}

