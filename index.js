const express = require("express");
const bodyParser = require("body-parser");
const app = express();

cors = require("cors");

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: true }));

app.get("/", function (req, res) {
  res.status(200).send({
    message: "GET Home route working fine!",
  });
});

//start server
app.listen(port, () => {
  console.log("Listen in  the port ", port);
});
