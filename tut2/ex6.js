const prompt = require('prompt-sync')();

let guess;

do {
    guess = Number(prompt('guess the number: '))
} while (guess != 7)
