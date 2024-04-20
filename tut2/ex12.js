// for(i = 0; i <= 10 ; i+=2) {
//     console.log(i)
// }

const prompt = require('prompt-sync')();
const givenNo = prompt("enter number: ");
for(i = 1; i <= 10; i++) {
    let multiple = i * givenNo; 
    console.log(multiple);
}