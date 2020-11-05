const reverseString = require('../src/reverseString.js');

test('reverses a string', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('reverses a string(Tendongze)', () => {
  expect(reverseString('Tendongze')).toBe('ezgnodneT');
});

test('gives the reverse of string(Kiptubei)', () => {
  expect(reverseString('Kiptubei')).toBe('iebutpiK');
});
