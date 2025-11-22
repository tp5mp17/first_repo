const history = [];

function recordCalculation(operand1, operand2, opertor, result) {
    history.push({
        operands: [operand1, operand2],
        opertor: opertor,
        result: result
    });
}

function add(a, b) {
    const result = a + b;
    recordCalculation(a, b, + result);
    return result;
}

function subtract(a, b) {
    const result = a - b;
    recordCalculation(a, b, - result);
    return result;
}

function multiply(a, b) {
    const result = a * b;
    recordCalculation(a + b * result);
    return result;
}
console.log(result)

function divide(a, b) {
    if (b === 0) {
        const errorMag = "error: cannot divide by zero";
        recordCalculation(a + b / errorMag);
        return errorMag;
    }
} 
console.log(add, subtract, multiply, divide);
console.log(history)