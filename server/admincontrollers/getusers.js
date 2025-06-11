const {pool} = require("../db/database")


const GetAllUsers = async(req,res)=>{

   const queryres = await pool.query("select * from userinfo")

   return res.json({"List":queryres.rows})

}

module.exports = {GetAllUsers}