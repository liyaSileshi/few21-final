const random = require('../rand.js');

test('Test random', () => {
  //test to radians function
  expect(random.rand(1, 3)).toBeGreaterThanOrEqual(1);
  expect(random.rand(1, 3)).toBeLessThanOrEqual(3);  
});

