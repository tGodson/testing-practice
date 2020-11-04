const analyze = require('../src/arrayAnalysis');

test('analysis of [1, 2, 3, 4])', () => {
  expect(analyze([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

test('analysis of empty array', () => {
  expect(arrayAnalysis([])).toEqual({
    average: NaN, min: Infinity, max: -Infinity, length: 0,
  });
});
