const express = require('express');
const router = express.Router();
const control = require('../controllers/auth.controller');
const middleware = require('../middlewares/userMiddleware');

router.get('/login', control.logIn);
router.post('/signup', control.signUp);

router.get('/users', control.getUsers);
router.get('/user/:id', control.getUserById);
router.get('/jwt-test', middleware.getId, control.tester);

module.exports = router;