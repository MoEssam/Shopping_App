const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Shopping App");
});

app.listen(port, () => {
  console.clear();
  console.log("Server is up and running: http://localhost:" + port);
});
