const {Router} = require('express')
const {weatherData} = require('../controllers/getweatherdata')

const router = Router()

router.post('/addmetadata',weatherData)

module.exports = router