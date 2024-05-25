const prompt = require('prompt-sync')();
let radius = Number(prompt("Enter the cirle's radius: "))
const pi = 3.141592653589793238462643383279502884197
function calculateCircleArea(radius) {
    area = pi * (radius**2);
    console.log(`Area of cirle = ${area}`);
}

calculateCircleArea(radius);