const router = require("express").Router();
const auth = require("../controllers/productController");

router.post("/newproduct", auth.newProduct);

module.exports = router;