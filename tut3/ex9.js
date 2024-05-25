const prompt = require('prompt-sync')();
let number = prompt("enter number here: ");
function isOddOrEven (number) {
    if(number%2 == 0) {
        console.log("The number is: Even");
    } else {
        console.log("The number is: Odd")
    }
}
isOddOrEven(number);