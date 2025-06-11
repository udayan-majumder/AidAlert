const {Router} = require('express')
const {GetAllUsers} = require('../admincontrollers/getusers')

const router = Router()

router.get('/getallusers',GetAllUsers)

module.exports = router



