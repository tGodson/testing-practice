const caesar = (str) => {
  const arr = str.split('').map(x => {
    if (/[A-Ma-m]/.test(x)) {
      const shifted = x.charCodeAt(0) + 13;
      return String.fromCharCode(shifted);
    } if (/[N-Zn-z]/.test(x)) {
      const shifted = x.charCodeAt(0) - 13;
      return String.fromCharCode(shifted);
    }
    return x;
  });
  return arr.join('');
};

module.exports = caesar;
