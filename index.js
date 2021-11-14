const express = require("express");
const bodyParser = require("body-parser");
const app = express();

cors = require("cors");

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: true }));

app.use("/", require("./src/calculatorRoute"));

//start server
app.listen(port, () => {
  console.log("Listen in  the port ", port);
});

module.exports = app;
