const express = require("express");
const router = express.Router();
const AuthContoller = require("../controllers/auth/index");

router.post("/signup", AuthContoller.signup);
router.post("/signin", AuthContoller.signin);
router.post("/logout", AuthContoller.logout);

module.exports = router;
