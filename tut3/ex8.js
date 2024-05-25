const prompt = require('prompt-sync')();
let principal = Number(prompt("enter principal amount: "));
let time = Number(prompt("enter time period in years: "));
const rate = 0.05 // hardcoding the interest rate to be 5%

function calculateInterest (principal, rate, time) {
    let interest = (principal * rate * time)/100;
    return interest;
}

console.log(`interest gained after ${time} years is: ${calculateInterest(principal, rate, time)}`);