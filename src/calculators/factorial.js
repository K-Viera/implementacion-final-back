const factorial = {};
const lut = [1n, 1n];

factorial.factorial = (n) => {
  for (let i = lut.length; i <= n; i++) {
    lut.push(BigInt(i) * lut[i - 1]);
  }
  return lut[n];
};

module.exports = factorial;
