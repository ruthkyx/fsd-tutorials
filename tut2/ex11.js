let string = "hello";
let reverse = "";
let stringArr = string.split(""); // [ 'h', 'e', 'l', 'l', 'o' ]
for(let i = stringArr.length - 1; i >= 0; i--) {
    reverse += stringArr[i]
}
console.log(reverse);

/* split my string into array
stringArr.length - 1 : index of the last element in the arrray 
add the last element in the stringArr to the new word
go through until the last element is add at index 0 */