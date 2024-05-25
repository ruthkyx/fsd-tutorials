let array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
];
let sum = 0;

for(let i = 0; i < array.length; i++) {
    for(let col = 0; col < array[i].length; col++){
        sum += array[i][col];
    }
}
console.log(sum);