const { User } = require("../models");

module.exports = {
  getUser: async (req, res) => {
    try {
      console.log({ User });

      const result = await User.findAll();

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
