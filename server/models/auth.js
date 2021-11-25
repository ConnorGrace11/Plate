const express = require('express');
const router = express.Router();
const control = require('../controllers/auth.controller');
const middleware = require('../middlewares/middleware.auth');

// auth routes
router.post('/login', control.logIn);
router.post('/signup', control.signUp);
// router.get('/logout/:username', middleware.getUserId, control.authenticateToken, control.logOut);

router.get('/login', control.isAuth, control.checkLogIn)
router.get('/users', middleware.restrictGet, control.getUsers)
router.get('/user/info', middleware.userDataFromToken);

router.patch('/user/:username', middleware.getUserId, middleware.restrictPatch, control.updateUser);

router.delete('/user/:username', middleware.getUserId, middleware.restrictDelete, control.deleteAccount);

module.exports = router;
// const express = require('express');
// const router = express.Router();
// const control = require('../controllers/user.controller');
// const control2 = require('../controllers/auth.controller')
// const middleware = require('../middlewares/middleware.auth');
//
// // auth routes
// router.post('/login', control.logIn);
// router.post('/signup', control.signUp);
//
// router.get('/user/:username', middleware.getAuthId, control.authenticateToken, control.getUserByName);
//
// router.patch('/user/:id', middleware.getAuthId, control.authenticateToken, control.updateUser);
// router.delete('/user/:id', middleware.getAuthId, control.authenticateToken, control.deleteAccount);
//
// module.exports = router;
