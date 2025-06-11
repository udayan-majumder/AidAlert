const {Router} = require("express")
const {DonateProduct} = require("../ngocontrollers/donateproducts")

const router = Router()

router.post('/donateproducts',DonateProduct)


module.exports = router