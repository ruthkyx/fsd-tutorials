const prompt = require('prompt-sync')();
let age = Number(prompt("Enter age: "))
function canVote(age) {
    if(age >= 21) {
        return console.log("ok you are 21 and above can vote liao");
    } else {
        return console.log("sorry too young");
    }
}
canVote(age);