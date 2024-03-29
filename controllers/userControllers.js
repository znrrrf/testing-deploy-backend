const { User } = require("../models");

module.exports = {
  getUser: async (req, res) => {
    try {
      console.log({ User });

      // Check if User model is defined before using it
      if (!User) {
        return res.status(500).send({
          message: "User model is not defined",
        });
      }

      // Check if findAll method is defined before calling it
      if (typeof User.findAll !== "function") {
        return res.status(500).send({
          message: "findAll method is not defined in User model",
        });
      }

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
