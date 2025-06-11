const {Router} = require("express")
const {sosInfo}  =require("../admincontrollers/getsosinfo")

const router = Router()

router.get("/sosinfo",sosInfo)

module.exports = router