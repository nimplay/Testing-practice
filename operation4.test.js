const capitalize = require('./opertion4');

test('capitalize the first letter of the word', () => {
  expect(capitalize('hello')).toMatch(/Hello/);
});