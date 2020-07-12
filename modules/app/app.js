const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/people", require("../people/people.router"));
app.use("/dog", require("../dog/dog.router"));
app.use("/cat", require("../cat/cat.router") )
app.get("/", (req, res) => {
  return res.send("hi");
});
module.exports = app;