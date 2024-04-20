const prompt = require('prompt-sync')();
let radius = parseFloat(prompt("Please input radius: "));

const pi = 3.14;
const area = pi*radius*radius; // area of circle = πr^2
console.log(`area: ${area.toFixed(2)}`);