const fibonacci = {};

fibonacci.calculate = (n) => {
  if ((n = 0)) {
    return "";
  } else if ((n = 1)) {
    return "0";
  } else if ((n = 2)) {
    return "0 1";
  } else {
    var result = "0 1";
  }
  var fibo = [0, 1];
  for (i = 2; i <= limit; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
    result = result + " " + fibo[i];
  }
  return result;
};

module.exports;
