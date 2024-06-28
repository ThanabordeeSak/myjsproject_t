const calculate = require('./calculator');

test('calculates (1 + 2) * 3 / 2 to equal 4.5', () => {
  expect(calculate(1, 2, 3)).toBe(4.5);
});

test('calculates (4 + 5) * 6 / 2 to equal 27', () => {
  expect(calculate(4, 5, 6)).toBe(27);
});

test('calculates (0 + 0) * 1 / 2 to equal 0', () => {
  expect(calculate(0, 0, 1)).toBe(0);
});
