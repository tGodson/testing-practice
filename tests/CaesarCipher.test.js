const encryptMsg = require('../src/CaesarCipher');

test('check if value is not undefined', () => {
  expect(encryptMsg('hello')).not.toBeUndefined();
});
