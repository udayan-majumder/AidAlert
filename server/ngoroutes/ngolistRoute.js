const {Router} = require('express')
const {NgoList} = require("../ngocontrollers/ngolist")

const router = Router()

router.get('/getngolist',NgoList)

module.exports = router
