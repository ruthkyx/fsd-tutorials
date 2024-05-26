let numbers = [
    [1, 2, 3],
    [4, 5, 6]
];
// outer loop iterates through both the rows
for(let row of numbers){
    let largest = row[0]; // initialize the largest with first element 
    // inner loop iterates throught elements in each row 
    for(let element of row) {
        if(element > largest) {
            largest = element;
        }
    }
    console.log("largest in row: ", largest);
}
