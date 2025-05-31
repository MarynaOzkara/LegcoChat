const express = require("express");
const router = express.Router();
const AuthContoller = require("../controllers/auth/index");

router.post("/signup", AuthContoller.signup);

module.exports = router;
