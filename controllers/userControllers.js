const db = require("../models");
const user = db.User;

module.exports = {
  getUser: async (req, res) => {
    try {
      console.log({ db });

      const result = await user.findAll();

      res.status(200).send({
        result,
      });
    } catch (error) {
      res.status(400).send({
        message: "Internal Server Error",
        error,
      });
      console.log({ error });
    }
  },
  getCoba: async (req, res) => {
    try {
      res.status(200).send({
        message: "success",
      });
    } catch (error) {
      res.status(400).send({
        error,
      });
    }
  },
};
