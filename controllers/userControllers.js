const db = require("../models");
const user = db.User;

module.exports = {
  getUser: async (req, res) => {
    try {
      console.log("sini");
      const result = await user.findAll();

      res.status(200).send({
        result,
      });
    } catch (error) {
      res.status(400).send({
        error,
      });
    }
  },
};
