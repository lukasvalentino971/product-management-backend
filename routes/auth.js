const express = require('express');
const { register, login, getProfile, logout } = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../utils/validator');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);
router.get('/profile', auth, getProfile);
router.get('/logout', auth, logout);

module.exports = router;