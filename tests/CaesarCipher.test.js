const caesar = require('../src/CaesarCipher');

test('converts to lower case letters', () => {
  expect(caesar('ma')).toBe('zn');
});

test('works with uppercase', () => {
  expect(caesar('MA')).toBe('ZN');
});

test('works with spaces', () => {
  expect(caesar('m a')).toBe('z n');
});

test('works with symbols', () => {
  expect(caesar('ma!@#$%^&*')).toBe('zn!@#$%^&*');
});

test('works with letters beyond M', () => {
  expect(caesar('nz')).toBe('am');
});
