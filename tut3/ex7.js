const prompt = require('prompt-sync')();
let celcius = Number(prompt("enter temperature in celcius: "));
function celsiusToFahrenheit (celcius) {
    let fahrenheit = (celcius*9/5) + 32;
    return fahrenheit;
}
console.log('temp in F is: ', celsiusToFahrenheit(celcius));
