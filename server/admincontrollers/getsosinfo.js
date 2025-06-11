const {pool}  =require("../db/database")


const sosInfo = async(req,res) =>{
    const queryRes = await pool.query("select * from sosinfo")
    return res.json({
    "SOSList":queryRes.rows
    })
}

module.exports = {sosInfo}

