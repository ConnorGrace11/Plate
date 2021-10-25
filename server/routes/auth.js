const express = require('express');
const router = express.Router();
const control = require('../controllers/user.controller');
const middleware = require('../middlewares/middleware.auth');

// auth routes
router.post('/login', control.logIn);

// router.get('/logout/:username', middleware.getUserId, control.authenticateToken, control.logOut);
router.post('/signup', control.signUp);

router.get('/users', middleware.restrictGet, control.getUsers)
router.get('/user/info', middleware.userDataFromToken);

router.patch('/user/:username', middleware.getUserId, middleware.restrictPatch, control.updateUser);
router.delete('/user/:username', middleware.getUserId, middleware.restrictDelete, control.deleteAccount);

module.exports = router;
