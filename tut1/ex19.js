const joAge = 22
const joHeight = 180

const friendAge = 22
const friendHeight = 185

const thirdAge = 22
const thirdHeight = 190

let joScore = joHeight + (joAge*5);
console.log(`Jo's score is: ${joScore}`);

let friendScore = friendHeight + (friendAge*5);
console.log(`Friend's score is: ${friendScore}`);

let thirdScore = thirdHeight + (thirdAge*5)
console.log(`third person's score is: ${thirdScore}`);

if (joScore > friendScore && joScore > thirdScore) {
    console.log("Jo is the winner!")

} else if (friendScore > joScore && friendScore > thirdScore){
    console.log("friend's is the winner!")

} else if (thirdScore > joScore && thirdScore > friendScore){
    console.log("third person is the winner")

} else {
    console.log("there's a draw~")
}

