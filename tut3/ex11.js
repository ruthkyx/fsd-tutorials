const prompt = require('prompt-sync')();
let minutes = Number(prompt("Enter number of minutes: "));
function minutesToSeconds(minutes) {
    let seconds = minutes * 60;
    console.log(`${minutes} is equal to ${seconds} seconds`);
}
minutesToSeconds(minutes);