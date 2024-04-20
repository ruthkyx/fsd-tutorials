const prompt = require('prompt-sync')();
let age = Number(prompt("enter age: "))

function ageCat(age) {
    if(age < 13) {
        console.log("You are a child");
    } else if (age >= 13 && age <18) {
        console.log("You are a teen!");
    } else {
        console.log("you adult liao jiayou");
    }
}

ageCat(age);