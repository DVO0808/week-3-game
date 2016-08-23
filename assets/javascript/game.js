//Global Variables 
//I want to know the users name and display it on the page
var userName = prompt("Welcome! Please tell us your name");
document.getElementById("userName").innerHTML = "User's Name is: " + userName;
document.getElementById("play").innerHTML = "Let's Play!";
document.getElementById("instructions").innerHTML = userName + "! " + "Press any key to get started";

//I need a word bank from which a word is randomly chosen for the user to guess 
var wordBank = ["beyonce", "javascript", "university", "debutante", "cantankerous", "flummox", "jazz", "xenophobia", "barack"];
var wordGuess = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log(wordGuess);

//I need a variable that would hold each letter of the random word chosen 
var wordGuessLetters = wordGuess.split("");

console.log(wordGuessLetters);
//I need a variable that holds a blank array that I can push dashes from my for loop to 
var wordDashes = [];



//I need to store the number of wins the user has 
var wins = 0;


//I need to store the number of losses the user has
var losses = 0;

//I need to store the wrong guesses of the user 

var wrongGuessArray = [];

//I need to store the number of guesses the user has 

var numGuesses = 12;
document.getElementById("guess").innerHTML = "Number Of Guesses: " + numGuesses;

//Functions 
//I need a for loop that will display a dash to represent every letter in the random word that was chosen for the user to guess 

for (var i = 0; i < wordGuessLetters.length; i++) {

    wordDashes.push("-");
    document.getElementById("dashes").innerHTML = "Word to guess: " + "<br>" + "<br>" + wordDashes.join(" ");

}


//I need a function to check if the letter that the user guesses is actually in the variable holding every letter of the word being guessed 

var dashesIndex = wordDashes.indexOf("-");


var isLetterInWord = false;


function checkLetter(letter) {

    for (var i = 0; i < wordGuessLetters.length; i++) {

        if (letter == wordGuessLetters[i]) {

            isLetterInWord = true;

            wordDashes[i] = wordGuessLetters[i];
            document.getElementById("dashes").innerHTML = "Word to guess: " + "<br>" + "<br>" + wordDashes.join(" ");

        }

    }
    if (isLetterInWord) {

        console.log(isLetterInWord);
        console.log(wordDashes);
    } else {

        if (wrongGuessArray.indexOf(letter) !== -1) {
            return;
        }
        numGuesses--;
        document.getElementById("wrong").innerHTML = "Wrong Guesses: " + wrongGuessArray;
        console.log(numGuesses);
        wrongGuessArray.push(letter);
        document.getElementById("guess").innerHTML = "Number Of Guesses: " + numGuesses;
        console.log(wrongGuessArray);
        console.log(dashesIndex);
    }

    isLetterInWord = false;

    function afterCheckLetter() {
        if ((wordDashes.indexOf("-")) == -1) {

            function audioPlay() {
                var audio = document.getElementById("player");
                if (audio.paused) {
                    audio.play();
                }

            }
            console.log("about to play Beyonce");

            audioPlay();

            wordDashes.join("");
            wins++;
            document.getElementById("win").innerHTML = "Wins " + wins;
            console.log("reset");
            document.getElementById("progress").innerHTML = "Congratulations, you've guessed the word correctly!";
            console.log("do you work");


           settingTimeout();

           
            
        }

        if (numGuesses == 0) {

            losses++;
            document.getElementById("loss").innerHTML = "Loss " + losses;
            document.getElementById("progress").innerHTML = "WHOMP WHOMP! No more guesses, try again!";

            settingTimeout();


        }
    }

    afterCheckLetter();


}


function settingTimeout(){

    setTimeout('initializeGame()', 4000);
}


    function initializeGame(){

    console.log("new game");
    wordGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(wordGuess);

    wordGuessLetters = wordGuess.split("");

    wordDashes = [];

    wrongGuessArray = [];

    numGuesses = 12;
    document.getElementById("guess").innerHTML = "Number Of Guesses: " + numGuesses;

    for (var i = 0; i < wordGuessLetters.length; i++) {

        wordDashes.push("-");
        document.getElementById("dashes").innerHTML = "Word to guess: " + "<br>" + "<br>" + wordDashes.join(" ");

    }

    document.getElementById("progress").innerHTML = "";

    function audioPlay2() {
        var audio = document.getElementById("player");
        if (audio.play) {
            audio.pause();
        }

    }

    audioPlay2();
}


//Executing Code 
document.onkeyup = function(event) {

    var keyCode = (document.layers) ? keyStroke.which : event.keyCode;
    var letterGuessed = String.fromCharCode(keyCode).toLowerCase();
    console.log(letterGuessed);
    checkLetter(letterGuessed);
}