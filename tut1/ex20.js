const prompt = require('prompt-sync')();
let psi = parseFloat(prompt("PSI: "))

if (psi >= 100) {
    console.log("PSI level: Unhealthy")
} else if (psi > 50 && psi <100) {
    console.log("PSI level: Moderate")
} else if (psi <50) {
    console.log("PSI level: Healthy")
}