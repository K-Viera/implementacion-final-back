const { Router } = require("express");
const route = Router();
const calculatorController = require("./calculatorController");

route.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

route.get("/", calculatorController.prueba);
route.post("/fibonacci", calculatorController.fibonacci);
module.exports = route;
