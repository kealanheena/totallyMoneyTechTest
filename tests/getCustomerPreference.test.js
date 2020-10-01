const { TestResult } = require('@jest/types');
const getCustomerPreference = require('../lib/getCustomerPreference');

test('Returns customers name and preference as an object', () => {
  expect(
    getCustomerPreference('Jess', 'Everyday')
  ).toEqual({
    name: 'Jess',
    preference: 'Everyday'
  });
});