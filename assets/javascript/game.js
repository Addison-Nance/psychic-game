// Array that defines the words and selects a random word
var gameArray = ["word1", "word2","word3","word4"];
    var randomWord = gameArray[Math.floor(Math.random() *gameArray.length)];
    document.body.innerhtml = randomWord;