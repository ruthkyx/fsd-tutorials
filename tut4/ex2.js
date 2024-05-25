let theArray = [
    ['a', 'b', 'c'], 
    ['d', 'e', 'f'],
]

for(let row = 0; row < theArray.length; row++) {
    for(let column = 0; column < theArray[row].length; column++) {
        console.log(`value at theArray[${row}][${column}] `, "is ", theArray[row][column]);
    }
}