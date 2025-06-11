const {Router} = require('express')
const {DeleteAllProducts} =require('../ngocontrollers/deleteproducts')

const router = Router()

router.post('/deleteallproducts',DeleteAllProducts)

module.exports = router