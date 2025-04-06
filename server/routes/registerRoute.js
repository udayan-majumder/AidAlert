const express = require('express');
const router = express.Router();
const { UserRegister } = require('../controllers/register');


router.post('/register', UserRegister);


module.exports = router;