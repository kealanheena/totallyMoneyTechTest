const { TestResult } = require('@jest/types');
const sum = require('../lib/sum');

test('properly add two numbers', () => {
  expect(
    sum(1,2)
  ).toBe(3);
});