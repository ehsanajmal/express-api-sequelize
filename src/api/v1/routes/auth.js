const router = require("express").Router();
const auth = require("../controllers/auth");

router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/loginWithPin", auth.loginWithPin);
router.post("/registerWithPin", auth.registerWithPin);

module.exports = router;
