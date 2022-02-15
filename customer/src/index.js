const express = require("express");
const cors = require("cors");
const { databaseConnection } = require("./models");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

databaseConnection;

app.get("/", (req, res) => {
  res.status(200).send("Hello from Customer");
});

app.listen(port, () => {
  console.clear();
  console.log("Customer server is up and running: http://localhost:" + port);
});
