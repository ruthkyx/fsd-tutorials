const prompt = require('prompt-sync')();
let x = parseInt(prompt("dollars: "))
let y = parseInt(prompt("cents: "))
let z = parseInt(prompt("number of muffins: "))

cost = ((x+(y/100))*z).toFixed(2)
centCost = ((x*100) + y)*z
console.log(centCost)

dollars = Math.floor(centCost/100) // Math.floor() round down to nearest integer
cents = centCost%100

console.log(`Total cost of ${z} muffins is $${dollars} and ${cents} cents ($${cost})`)