for (let row = 1; row <= 5; row++) {
    let stars = '';
    for(let col = 1; col <= row; col++) {
        stars += '* '; 
    }
    console.log(stars);
}

// alternate way

// let rows = 5; 
// let output = ';'
// for(let i = 1; i <= rows; i++) {
//     for(let j = 0; j < i; j++) {
//         output += '*';
//     }
//     output += '\n';
// }
// console.log(output);

/*
explanation: 
outer for loop: this loop runs from 1 through the number of rows (rows). each iteration represents a row in the triangle
inner for loop: adds stars (*) to the output string. no of iterations increases with each outer loop iteration. 
*/