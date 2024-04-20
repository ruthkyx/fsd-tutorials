let number = 2;
let string = "2";

if (number == string) {
    console.log("the number 2 == '2' ");
    // type coeercion will convert the integer 2 into a string
}
if (number === string) {
    console.log("the number 2 === '2' ");
} else {
    console.log("the number 2 is not === '2' ");
    // no type coercion so since they're different data types, it returns false
}