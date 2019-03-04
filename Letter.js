
function Letter(character) {
    // string containing value of character
    this.character = character;
    // booleand determining if the letter has been corrected guessed or not
    this.guessed = false;
    // returns correctly guessed letter or a placeholder
    this.guessLetter = function() {
        if (this.guessed) {
            return this.character;
        } else {
            return '*';
        }
    };
    // takes letter as arugment
    // checks if letter is equal to the value of stored character
    this.checkGuess = function(letter) {
        if (this.character === letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;

