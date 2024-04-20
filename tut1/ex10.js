const prompt = require('prompt-sync')();
let birthYr = prompt("Please enter your birth year ");
let currentYr = prompt("What year is it now? ");

let userAge = currentYr - birthYr;
console.log(`The user is currently ${userAge} years old`);