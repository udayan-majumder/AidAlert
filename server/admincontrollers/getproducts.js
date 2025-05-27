const {pool} = require('../db/database')


const getProducts = async(req,res) =>{

const resquery = await pool.query('select * from ngoproduct')

return res.json({"List":resquery.rows})

}

module.exports = {getProducts}