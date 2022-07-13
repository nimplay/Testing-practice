const stringLentgh = require('./opertion1');

let string = "pepe";

test('string to equal 4', () => {  
  expect(stringLentgh(string)).toBe(4);
});
test('string greather or equal 1', () => {
  expect(stringLentgh(string)).toBeGreaterThanOrEqual(1);
});
test('string less or equal 10', () => {
  expect(stringLentgh(string)).toBeLessThanOrEqual(10);
});
