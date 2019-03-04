
var Letter = require('./Letter.js');

function Word(wordToGuess) {
    // array holds the letters of the word to guess
    this.lettersInWord = [];
    // populates letters in lettersInWord array
    // for each one, creates an instance of Letter constructor
    this.populate = function() {
        var wordArr = wordToGuess.split('');
        for (var i=0; i < wordArr.length; i++) {
            var letter = new Letter(wordArr[i]);
            this.lettersInWord.push(letter);
        }
    };
    // takes in letter as argument 
    // and determines if it's present in the word
    this.testLetter = function(char) {
        for (var i=0; i < this.lettersInWord.length; i++) {
            this.lettersInWord[i].checkGuess(char);
        }
        this.toString();
    };
    // displays either placeholders or correctly guessed letters
    this.toString = function() {
        var string = '';
        for (var i=0; i < this.lettersInWord.length; i++) {
            string += this.lettersInWord[i].guessLetter();
        }
        console.log(string);
        return string;
    }
}

module.exports = Word;