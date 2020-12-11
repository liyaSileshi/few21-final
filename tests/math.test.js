const math = require('../math.js');


test('Test degree to radians', () => {
  //test to radians function
  expect(math.toRadians(0)).toBe(0)
  expect(math.toRadians(1)).toBe(0.017453292519943295)
  expect(math.toRadians(90)).toBe(1.5707963267948966)
});

test('Test degree to radians', () => {
  //test to radians function
  expect(math.toDegrees(0)).toBe(0)
  expect(math.toDegrees(5)).toBe(286.4788975654116)
  expect(math.toDegrees(2)).toBe(114.59155902616465)
});