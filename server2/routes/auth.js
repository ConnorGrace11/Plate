const express = require('express');
const router = express.Router();
const control = require('../controllers/auth.controller');
const middleware = require('../middlewares/middleware.auth');

// auth routes
router.post('/login', control.logIn);
router.post('/signup', control.signUp);

router.get('/users', control.getUsers);
router.get('/user/:id', middleware.getAuthId, control.getUserById);
router.get('/users/protected', control.getProtected);

module.exports = router;
