const express = require("express");
const app = express();
const db = require("./models");
const { userRouters } = require("./routers");
const user = db.User;

const dotenv = require("dotenv");

dotenv.config();

// app.use("/", (req, res) => {
//   try {
//     res.status(200).send({
//       message: "this is my api",
//     });
//   } catch (error) {
//     res.status(400).send({
//       error,
//     });
//   }
// });

// app.use("/database/user", async (req, res) => {
//   try {
//     const result = await user.findAll();

//     res.status(200).send({
//       message: "this from data base",
//       result,
//     });
//   } catch (error) {
//     res.status(400).send({
//       error,
//     });
//   }
// });

app.use(express.json());

app.use("/user", userRouters);

app.listen(1000, () => {
  // db.sequelize.sync({ alter: true });

  console.log("por is running on 1000");
});
module.exports = app;
