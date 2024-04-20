const prompt = require('prompt-sync')();
let num = parseInt(prompt("number: "))

if (num%2 == 0) {
    console.log('the number is even');
} else {
    console.log('the number is odd');
}