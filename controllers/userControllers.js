const db = require("../models");
const user = db.User;

module.exports = {
  getUser: async (req, res) => {
    try {
      const result = await user.findAll();

      res.status(200).send({
        result,
      });
    } catch (error) {
      console.error("Error in getUser controller:", error);
      res.status(500).send({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
};
