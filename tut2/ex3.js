const prompt = require('prompt-sync')();

let number;

do {
    number = Number(prompt("enter a number between 1 to 10: "));
} while (number < 1 || number > 10);

// alternative way

// let y = 0;
// do {
//     y = prompt("enter a number: ")
//     if(y >= 1 && y <=10) {
//         break;
//     }
// } while (true) {
//     console.log(`the number is ${y}`);
// }