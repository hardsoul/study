var sum = require('./day4_1');

test('sum 테스트', function() {
  expect(sum([1,2,3,4,5,6,7,8,9,10])).toBe(55);
  expect(sum([2,3,4,5,6,7,8,9,10])).toBe(54);
  expect(sum([1,2,3,4])).toBe(10);
  expect(sum([1,2,3,4])).not.toBe(8);
});