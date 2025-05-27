const  {Router} = require("express")
const {getProducts} = require("../admincontrollers/getproducts")

const router= Router()

router.get('/getproducts',getProducts)

module.exports = router