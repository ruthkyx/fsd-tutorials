const prompt = require('prompt-sync')();

while(true) {
    let input = prompt("enter something: ");
    if(input == "exit") {
        break;
    }
}