const router = require("express").Router();
const auth = require("../controllers/productController");
const {body} = require('express-validator');

router.post("/newproduct",[
    body('name').notEmpty().withMessage("Product Name Must Be Required"),
    body('model').isEmail().withMessage("Product Model Must Be Required"),
    body('groupID').notEmpty().withMessage("Group Id Must Be Required"),
], auth.newProduct);

module.exports = router;