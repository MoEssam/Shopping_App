const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/customer", proxy("http://localhost:4001"));
app.use("/shopping", proxy("http://localhost:4002"));
app.use("/products", proxy("http://localhost:4003"));
app.use("/", (req, res) => {
  res.status(200).send("Hello from gateway");
});

app.listen(port, () => {
  console.log("Server is up and running: http://localhost:" + port);
});
