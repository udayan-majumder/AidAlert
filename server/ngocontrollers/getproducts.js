const { pool } = require("../db/database");

const NgoGetProducts = async (req,res) => {
   
    const {Userid} = req.body

  const resQuery = await pool.query(

    "select ngocart.userid,ngocart.productid,ngocart.donateqty,ngoproduct.productname,ngoproduct.quantity,ngoproduct.shelflife from ngocart inner join ngoproduct on ngocart.productid = ngoproduct.productid where ngocart.userid= $1",[Userid]
  );

   res.json({"List":resQuery.rows})
};

module.exports = {NgoGetProducts}
