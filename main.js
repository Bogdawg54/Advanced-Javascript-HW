var Word = require("./word.js");
var prompt = require("prompt");

prompt.start();

debugger
var game = function() {
  this.wordBank = ["number", "guess", "remember", "forget"];
  this.guessesRemaining = 10;
  this.currentWrd = null;
  this.startGame = function(wrd) {
    var startWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    this.currentWrd = new Word(startWord);
    this.currentWrd.getLets();
    this.keepPromptingUser();
  }
  this.keepPromptingUser = function() {
    var self = this;
    prompt.get(["guessLetter"], function(err, result){
      console.log("The letter or space you guessed is " + result.guessLetter);
      var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);
      if (findHowManyOfUserGuess === 0){
        console.log("You guessed wrong!");
        self.guessesRemaining -= 1;
      } else {
        console.log("You guessed right!")
        if (self.currentWrd.didWeFindTheWord() === true) {
          console.log("You won!")
          return 1;
        }
      }
      console.log("Guesses remaining: " + self.guessesRemaining);
      console.log(self.currentWrd.wordRender());
      if (self.guessesRemaining > 0 || self.currentWrd === false){
        self.keepPromptingUser();        
      } else if (self.guessesRemaining === 0){ 
        console.log("Game over bro " + self.currentWrd.word);
      } else {
        console.log(self.currentWrd.wordRender());
      }
    }); 
  } 
}



var game1 = new game();
game1.startGame();
