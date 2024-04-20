let arr = [1, 2, 3, 4, 5];
// let reverseArr = [];

// for(let i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
// }
// console.log(reverseArr);

// writing it as a function: 

function reverseArray(arr) {
    // (arr) above is the parameter
    let newArr = [] // temp array placeholder
        for (let i = arr.length - 1; i >= 0; i--) {
            newArr.push(arr[i]);
        }
        return newArr;
}

console.log(reverseArray(arr));

// can also use midpoint/math.floor to reverse from the midpoint (more efficient)