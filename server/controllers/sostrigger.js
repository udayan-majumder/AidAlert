const {pool} = require('../db/database')

const SOSTrigger = async(req,res) =>{

    const {UserInfo,Coordinates,DisasterType,Severity} = req.body
    const {Username,Phoneno,Useraddress} = UserInfo


    const queryRes = await pool.query('insert into sosinfo values($1,$2,$3,$4,$5,$6,$7)',[UserInfo?.userId,Username,Phoneno,Useraddress,Coordinates,DisasterType,Severity])

    return res.json({"message":"successfully added "})
}

module.exports = {SOSTrigger}