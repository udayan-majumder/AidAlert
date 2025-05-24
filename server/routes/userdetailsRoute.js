const express= require('express')
const router = express.Router()
const {CheckLogin} = require('../controllers/userdetails')

router.post('/userdetails',CheckLogin)

module.exports = router