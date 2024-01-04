const express = require("express");
const app = express();

app.use("/", (req, res) => {
  try {
    res.status(200).send({
      message: "this is my api",
    });
  } catch (error) {
    res.status(400).send({
      error,
    });
  }
});

app.listen(1000, () => {
  console.log("por is running on 1000");
});
module.exports = app;
