const taxRate = 0.29 //29% tax rate
var income = 450000

let totalPayment = taxRate*income
console.log(`Donald has to pay $${totalPayment}`)
// how to make it 2 dp only??

let rounded = Math.round(totalPayment*100/100)
console.log(`rounding total, he would need to pay ${rounded}`)