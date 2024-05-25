// print elements on the diagonal of a square 2d array
let matrix = [
    [1, 2, 3], // [0][0]
    [4, 5, 6], // [1][1]
    [7, 8, 9] // [2][2]
];
for(let row = 0; row < matrix.length; row++){
        console.log(matrix[row][row]); // the row and the column index for diag are the same
}