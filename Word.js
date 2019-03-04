
var Letter = require('./Letter.js');

function Word(wordToGuess) {
    // An array of new Letter objects representing the letters of the underlying word
    this.lettersInWord = [];
    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.populate = function() {
        var wordArr = wordToGuess.split('');
        for (var i=0; i < wordArr.length; i++) {
            var letter = new Letter(wordArr[i]);
            this.lettersInWord.push(letter);
        }
    };
    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.testLetter = function(char) {
        for (var i=0; i < this.lettersInWord.length; i++) {
            this.lettersInWord[i].checkGuess(char);
        }
        this.toString();
    };
    this.toString = function() {
        var string = '';
        for (var i=0; i < this.lettersInWord.length; i++) {
            string += this.lettersInWord[i].guessLetter();
        }
        console.log(string);
        return string;
    }
}

var word = new Word('hello');
word.populate();
word.toString();
word.testLetter('e');
word.testLetter('o');