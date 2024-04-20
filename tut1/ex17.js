const score = 66
console.log(`Your score is ${score}`);

// use if-else statements to determine score
if (score >= 90 && score <= 100) {
    console.log("you got an A!");
} else if (score >= 80 && score <= 89) {
    console.log("you got a B!");
} else if (score >= 70 && score <= 79) {
    console.log("you got a C!");
} else if (score >= 60 && score <= 69) {
    console.log("you got a D!");
} else if (score < 60) {
    console.log("you failed... got an F");
}

// use switch statement

switch(true) {
    case score >= 90 && score <= 100:
        console.log("you got an A!");
        break;
    case score >= 80 && score <= 89:
        console.log("you got a B!");
        break;
    case score >= 70 && score <= 79:
        console.log("you got a C!")
        break;
    case score >= 60 && score <= 69:
        console.log("you got a D!");
        break;
    case score < 60 && score >=0:
        console.log("you failed... got an F");
        break;
    default:
        console.log("invalid score!");
}

// alternative way to write the switch:
/* 
let score = parsetInt(prompt("Enter score: "));
console.log(`score: ${score}`)
switch (true) {
    case score >=90 && score <=100:
        grade = "A";
        break;
    case ......
    default: 
        grade = "invalid score!!!"
}
console.log(`Score ${score} is equivalent to grade ${grade}`)
*/