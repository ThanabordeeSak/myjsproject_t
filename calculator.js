const { sum, multiply, divide } = require('./math');

function calculate(a, b, c) {
    const additionResult = sum(a, b);
    const multiplycationResult = multiply(additionResult, c);
    return divide(multiplycationResult, 2);
}
module.exports = calculate;
