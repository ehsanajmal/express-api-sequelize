const router = require("express").Router();

router.use("/auth", require("./auth"));
router.use("/group", require("./groupRoutes"));
router.use("/group/products", require("./productRoutes"));

module.exports = router;
