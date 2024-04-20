let a = 2
let b = 4
let temp;

console.log(`before swapping: a = ${a}`);
console.log(`before swapping: b = ${b}`);

temp = a;
a = b;
b = temp;

console.log(`after swap: a = ${a}`)
console.log(`after swap: b = ${b}`)

// using arithmetic variable without using temp variable (using x & y instead of a & b)

let x = 2
let y = 4

console.log(`before swapping: x = ${x}`);
console.log(`before swapping: y = ${y}`);

x = x + y; // x = 2+4 = 6
y = x - y; // y = 6-4 = 2
x = x - y; // x = 6-2 = 4

console.log(`after swap: x = ${x}`)
console.log(`after swap: y = ${y}`)