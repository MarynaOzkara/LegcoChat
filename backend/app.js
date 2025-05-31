const experss = require("express");
require("dotenv").config();

const app = experss();

app.get("/", (req, res) => {
  res.send("Welcome to Legco Chat!");
});

module.exports = app;
