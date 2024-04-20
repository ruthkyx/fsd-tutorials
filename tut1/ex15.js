const prompt = require('prompt-sync')();
let num = parseInt(prompt("Enter number: "));

if (num > 0) {
    console.log("the number is positive");
} else if (num < 0) {
    console.log("the number is negative");
} else {
    console.log("the number is 0");
}