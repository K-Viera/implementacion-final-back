const calculatorController = {};

calculatorController.prueba = (req, res) => {
  res.status(200).send({
    message: "GET Home route working fine!",
  });
};

module.exports = calculatorController;
