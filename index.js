// importing external files/packages
const inquirer = require('inquirer');
const Word = require('./Word');

// Array holds all possible words to be guessed
const gameWords = ['apple','apricot','avocado','banana','blackberry','blood orange','blueberry','boysenberry','cantaloupe','cherry','coconut','cranberry','date','dragon fruit','elderberry','fig','grape','grapefruit','guava','honeydew','jackfruit','kiwi','lemon','lime','lingonberry','lychee','mandarin orange','mango','melon','mulberry','nectarine','orange','papaya','passion fruit','peach','pear','persimmon','pineapple','plantain','plum','pluot','pomegranate','raisin','raspberry','star fruit','strawberry','tangelo','tangerine'];

// global variables
let guessesLeft;
let wordToGuess;
let word;

function playGame(){
    // default guesses left
    guessesLeft = 15;
    // randomly selects word to guess
    wordToGuess = gameWords[Math.floor(Math.random() * 48)];
    // creates instance of Word using random wordToGuess
    word = new Word(wordToGuess);
    // building out array to use Word constructor
    word.populate();
    // Welcome
    console.log('Welcome to Word Guess! Today\'s topic is...fruit! Here\'s your word:');
    // logs placeholders representing letters in word
    word.toString();
    // Alerts player to remaining guesses
    console.log(`You have ${guessesLeft} guesses remaining.`);
    guess();
}

// Prompts the user for each guess and keeps track of the user's remaining guesses
function guess() {
    inquirer
    .prompt(
        {
            name: 'guess',
            message: 'Your guess:'
        }
    ).then(reply => {
        // checking that they only enter one letter at a time
        if (reply.guess.length > 1) {
            console.log('Please guess one letter at a time.');
            guess();
        } else {
            let userGuess = reply.guess; 
            // pass through testLetter method
            word.testLetter(userGuess); 
            // decrement guessesLeft
            guessesLeft--; 
            // alert player
            console.log(`You have ${guessesLeft} guesses remaining.`); 
            // run function that determines if another guess should be made or game ended
            updateGuessedArr(); 
        }     
    });
}

// function checks status of each letter in the word. 
// If all are guessed correctly, it alerts the user that they have won.
function updateGuessedArr() {
    let guessed = [];
    // takes stock of letters that have not yet been correctly guessed
    // saves to guessed array
    word.lettersInWord.map(letter => guessed.push(letter.guessed));

    // conditionals check for status of game

    // 1) continues game
    if (guessed.includes(false) && guessesLeft > 0) {
        guess();
    // 2) runs if there are remaining letters and the player ran out of guesses
    } else if (guessed.includes(false) && guessesLeft === 0) {
        console.log(`You lost.\n The word was ${wordToGuess}.`);
        playAgain();
    // 3) runs if all letters guessed correctly
    } else if (!guessed.includes(false)) {
        console.log('You won!');
        playAgain();
    }
}

function playAgain(){
    inquirer
    .prompt(
        {
            name: 'playAgain',
            message: 'Play again?',
            type: 'confirm',
            default: true
        }
    ).then(reply => {
        if (reply.playAgain) playGame();
        else console.log('Come back again soon!');
    });
}

// initialize game
playGame(); 