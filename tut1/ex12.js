const prompt = require('prompt-sync')();
// note! the input will be taken as a string so need to parse it first
let num1 = parseInt(prompt("Enter num1:"))
let num2 = parseInt(prompt("Enter num2: "))
let num3 = parseInt(prompt("Enter num3: "))
let num4 = parseInt(prompt("Enter num4: "))

let average = (num1 + num2 + num3 + num4)/4
console.log(`average: ${average}`);