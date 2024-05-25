const prompt = require('prompt-sync')();
let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
function findLargest(num1, num2) {
    if(num1 > num2){
        console.log(num1);
    } else {
        console.log(num2);
    }
}

findLargest(num1, num2);
// findLargest(1, 2);
// findLargest(44, 22);