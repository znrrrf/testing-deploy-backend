const router = require("express").Router();
const { userControllers } = require("../controllers");

router.get("/all", userControllers.getUser);

module.exports = router;
