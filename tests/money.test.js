const money = require('../money.js');


test('Test value to dollars', () => {
  //test to radians function
  expect(money.toDollars(23)).toBe('$23.00')
  expect(money.toDollars(1)).toBe('$1.00')
  expect(money.toDollars(25.66642)).toBe('$25.67')
});