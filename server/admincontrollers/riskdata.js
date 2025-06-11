const {pool} = require('../db/database')


const getRiskData = async(req,res) =>{

    const queryRes = await pool.query('select * from riskinfo')

    return res.json({"RiskList":queryRes.rows})

}

module.exports = {getRiskData}