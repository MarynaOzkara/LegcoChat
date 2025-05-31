const experss = require("express");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/auth");

const app = experss();
app.use(experss.json());
app.use(cors());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Legco Chat!");
});

module.exports = app;
