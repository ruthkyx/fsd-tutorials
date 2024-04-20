let arr = [1, 2, 8, 4, 5];
let largest = arr[0];
// i is the array index
for(i = 0; i < arr.length; i++) {
    if(arr[i] > largest) {
        largest = arr[i]
    }
}
console.log(largest);

/* let the largest be at index 0 first then go through the array. 
if there's a number larger than the one at index, the largest number is replaced. 
the loop continues till the largest number is found*/