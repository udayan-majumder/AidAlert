const {pool} = require('../db/database')

const NgoAddProducts = async(req,res)=>{

   const {productname,qty,shelflife} = req.body
   const search = await pool.query('select * from ngoproduct where productname = $1',[productname])
   if(search.rows.length>0){
    return res.json({"message":"product exsists"})
   }
   const query = await pool.query('insert into ngoproduct(productname,quantity,shelflife) values($1,$2,$3)',[productname,qty,shelflife])

   return res.json({"message":"added successfully"})
}


module.exports = {NgoAddProducts}