const { sum, multiply, divide } = require('./calculator.js')

test('add 2 + 5 to equal 7', () => {
    expect(sum(2, 5)).toBe(7);
})

test('multiply 2*3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
})

test('divide 6/3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
})

test('divide 6/0 to throw error', () => {
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
})
