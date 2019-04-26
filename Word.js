const Letter = require('./Letter.js');

class Word {
    constructor(wordToGuess){
        this.wordToGuess = wordToGuess;
        // array holds the letters of the word to guess
        this.lettersInWord = [];
    }
    
    // populates letters in lettersInWord array
    // for each one, creates an instance of Letter constructor
    populate() {
        let wordArr = this.wordToGuess.split('');
        for (let i=0; i < wordArr.length; i++) {
            let letter = new Letter(wordArr[i]);
            this.lettersInWord.push(letter);
        }
    }

    // takes in letter as argument 
    // and determines if it's present in the word
    testLetter(char) {
        this.lettersInWord.map(character => character.checkGuess(char));
        this.toString();
    }

    // displays either placeholders or correctly guessed letters
    toString() {
        let string = '';
        this.lettersInWord.map(character => string += character.guessLetter());
        console.log(string);
        return string;
    }
}

module.exports = Word;