// Array that defines the words and selects a random word
var gameArray = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var randomLetter = gameArray[Math.floor(Math.random() *gameArray.length)];
    console.log(randomLetter)

    var gameWins=0
    var gameLosses=0
    var guessesLeft=15

    document.getElementById("guessesRemains").innerHTML=(guessesLeft)

    document.onkeyup=function(event){
        var letter = event.key.toLowerCase();

if (letter === randomLetter){
    console.log("true");
    gameWins++
    document.getElementById("wins").innerHTML = gameWins
    // document.randomLetter.reset();

}else if(guessesLeft=0) {
    console.log("GameOver");

} else{
    guessesLeft--
    document.getElementById("previousGuesses").prepend(" " + letter);

}
    }
