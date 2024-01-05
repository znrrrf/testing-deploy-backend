const router = require("express").Router();
const { userControllers } = require("../controllers");

router.get("/all", userControllers.getUser);
router.get("/coba", userControllers.getCoba);

module.exports = router;
