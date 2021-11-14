const triangulo = {};

triangulo.calculateArea = (lado1, lado2, lado3) => {
  const sm = (lado1 + lado2 + lado3) / 2;

  return Math.sqrt(sm * ((sm - lado1) * (sm - lado2) * (sm - lado3)));
};

module.exports = triangulo;
