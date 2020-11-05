const analyze = (ar) => {
  let sum = 0;
  for (let i = 0; i < ar.length; i += 1) {
    sum += ar[i];
  }

  return {
    average: sum / ar.length,
    min: Math.min.apply(null, ar),
    max: Math.max.apply(null, ar),
    length: ar.length,
  };
};

module.exports = analyze;
