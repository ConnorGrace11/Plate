const express = require('express');
const router = express.Router();
const control = require('../controllers/user.controller');
const control2 = require('../controllers/auth.controller')
const middleware = require('../middlewares/middleware.auth');

// auth routes
router.post('/login', control.logIn);
router.post('/signup', control.signUp);

router.get('/user/:username', middleware.getAuthId, control.authenticateToken, control.getUserByName);

router.patch('/user/:id', middleware.getAuthId, control.authenticateToken, control.updateUser);
router.delete('/user/:id', middleware.getAuthId, control.authenticateToken, control.deleteAccount);

module.exports = router;
