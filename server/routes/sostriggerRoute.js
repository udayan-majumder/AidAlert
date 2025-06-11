const {Router} = require("express")
const {SOSTrigger} = require("../controllers/sostrigger")

const router = Router()

router.post('/sostrigger',SOSTrigger)

module.exports = router