const router = require("express").Router();
const auth = require("../controllers/groupController");

router.post("/creategroup", auth.createGroup);


module.exports = router;