const calculatorController = {};
let { calculateFibonacci } = require("./calculators/fibonacci");
let { calculateArea } = require("./calculators/triangulo");

calculatorController.prueba = (req, res) => {
  res.status(200).send({
    message: "GET Home route working fine!",
  });
};

calculatorController.fibonacci = (req, res) => {
  let { input } = req.body;
  if (input < 0) {
    res.status(400).json("No se permiten numeros negativos");
  } else if (input > 100000) {
    res.status(400).json("JavaScrip no puede procesar un dato tan grande");
  } else {
    res.status(200).json(calculateFibonacci(input));
  }
};

calculatorController.aptriangulo = (req, res) => {
  let { lado1, lado2, lado3 } = req.body;
  if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
    if (
      lado1 + lado2 > lado3 &&
      lado3 + lado2 > lado1 &&
      lado1 + lado3 > lado2
    ) {
      res.status(200).json({
        area: calculateArea(lado1, lado2, lado3),
        perimetro: lado1 + lado2 + lado3,
      });
    } else {
      res.status(400).json("Numeros invalidos");
    }
  } else {
    res.status(400).json("Numeros invalidos");
  }
};

module.exports = calculatorController;
