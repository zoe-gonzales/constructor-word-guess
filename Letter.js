class Letter {
    constructor(character){
        // string containing value of character
        this.character = character;
        // boolean determining if the letter has been corrected guessed or not
        this.guessed = false;
    }

    // returns correctly guessed letter or a placeholder
    guessLetter() {
        if (this.guessed) {
            return this.character;
        } else {
            return '*';
        }
    }

    // takes letter as arugment and checks if letter is equal to the value of stored character
    checkGuess(letter) {
        if (this.character === letter) this.guessed = true;
    }
}

module.exports = Letter;