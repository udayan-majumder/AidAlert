const {pool} = require('../db/database')




const weatherData = async(req,res)=>{
const {location,metadata} = req.body

const queryRes = await pool.query("insert into riskinfo values($1,$2)",[location,metadata])

return res.json({"message":"added succesfully"})

}


module.exports = {weatherData}
