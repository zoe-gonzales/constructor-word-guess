
var Letter = require('./Letter.js');

function Word(wordToGuess) {
    // An array of new Letter objects representing the letters of the underlying word
    this.lettersInWord = wordToGuess.split('');
    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.populateWordToGuess = function() {
        var string = '';
        this.lettersInWord.forEach(char => {
            var letter = new Letter(this.lettersInWord[char], false);
            string += letter.guessLetter();
        });
        console.log(string);
        return string;    
    };
    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.testLetter = function(char) {
        for (var i=0; i < this.lettersInWord.length; i++) {
            var letter = new Letter(this.lettersInWord[i], true);
            letter.checkGuess(char);
        }
    }
}

var word = new Word('hello');
word.populateWordToGuess();
word.testLetter('e');
word.populateWordToGuess();