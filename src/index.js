const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello from Shopping App");
});

app.listen(port, () => {
  console.clear();
  console.log("Server is up and running: http://localhost:" + port);
});
