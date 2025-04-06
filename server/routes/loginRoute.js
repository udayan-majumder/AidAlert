const express = require('express');
const router = express.Router();
const { UserLogin } = require('../controllers/login');

router.post('/login', UserLogin);

module.exports = router;