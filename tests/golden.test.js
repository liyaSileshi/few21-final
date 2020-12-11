const golden = require('../goldenRatio.js');


test('Test golden ration', () => {
  //test golden ration
  expect(golden.goldenRatio(1)).toBe(1.61803398875)
  expect(golden.goldenRatio(0)).toBe(0)
  expect(golden.goldenRatio(10)).toBe(16.1803398875)
});