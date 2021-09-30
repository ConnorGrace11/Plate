const express = require("express");
const router = express.Router();
const control = require("../controllers/auth.controller");
const middleware = require("../middlewares/middleware.auth");

router.post("/login", control.logIn);

router.post("/signup", control.signUp);

router.get("/users", control.getUsers);
router.get("/user/:id", middleware.getAuthId, control.getUserById);

module.exports = router;
