const {Router} = require('express')
const  {NgoGetProducts} = require('../ngocontrollers/getproducts')

const router = Router()

router.post('/getproducts',NgoGetProducts)

module.exports = router