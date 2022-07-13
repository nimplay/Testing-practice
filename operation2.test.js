const reverseString = require('./opertion2');

let string = "pepe";

test('string reverse', () => {
  expect(reverseString(string)).toMatch(/epep/);
});