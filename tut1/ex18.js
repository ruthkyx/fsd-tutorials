let isSunny = false;
let isCloudy = true;
let isEveGoing = true;
let isTuesday = false; 
let isJaniceGoing = false;

// They will only go to the beach if the following conditions are met:
// The weather is sunny or the weather is cloudy
// Eve must be going
// It is not a Tuesday
// Eve’s friend Janice is not going

if((isSunny || isCloudy) && isEveGoing && isTuesday == false && isJaniceGoing == false) {
    console.log("Going to the beach!");
} else {
    console.log("Not going to the beach!");
}