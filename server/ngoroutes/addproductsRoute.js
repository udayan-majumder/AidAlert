const {Router} = require("express")
const {CartAdd} = require("../ngocontrollers/addproducts")

const router = Router()

router.post('/addtocart',CartAdd)

module.exports = router
