const prompt = require('prompt-sync')();
let operand1 = Number(prompt("enter first operand: "))
let operator = prompt("enter operator: ")
let operand2 = Number(prompt("enter second operand: "))

function calculator (operand1, operand2, operator) {
    switch(operator) {
        case ('+'): 
            result = operand1+operand2;
            break;
        case ('-'):
            result = operand1-operand2;
            break;
        case('*'):
            result = operand1*operand2;
            break;
        case('/'):
            result = operand1/operand2;
            break;
    }
    console.log(result);
}
calculator(operand1, operand2, operator);