const prompt = require('prompt-sync')();
let number = Number(prompt("Enter number: "));
function printTable(number) {
    for(multiple = 0; multiple < 11; multiple++) {
        result = multiple * number;
        console.log(`${number} x ${multiple} = ${result}`);
    }
}
printTable(number);