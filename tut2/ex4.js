const principal = 1000; // initial amount
const rate = 0.05 // interest rate of 5%
let total = principal; // initialize total to principal 
let year = 0; // start counting from yr 0; 1st yr no interest

while(total < principal*2){
    year++;
    total += total* rate; // total = 1000+ (1000*0.05)
}
console.log(`after ${year} years, total amount has doubled at ${total}`)