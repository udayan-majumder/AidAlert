const {Router}  =require('express')
const {getRiskData} = require('../admincontrollers/riskdata')

const router= Router()

router.get('/riskdata',getRiskData)

module.exports =  router
