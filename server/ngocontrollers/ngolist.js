const {pool} = require("../db/database")


const NgoList = async(req,res) =>{

const queryres = await pool.query(" SELECT userid,ngoname,SUM(donateqty) AS total_quantity FROM ngodonation GROUP BY ngoname,userid ORDER BY total_quantity DESC")

return res.json({"List":queryres.rows})

}

module.exports = {NgoList}