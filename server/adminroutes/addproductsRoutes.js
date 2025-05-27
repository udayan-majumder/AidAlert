const {Router}  = require('express')
const {NgoAddProducts} = require('../admincontrollers/addproducts')

const router = Router()

router.post('/addproducts',NgoAddProducts)


module.exports = router