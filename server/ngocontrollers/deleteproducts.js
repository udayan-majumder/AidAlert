const {pool} = require('../db/database')


const DeleteAllProducts = async(req,res)=>{

    const {NgoCartList}= req.body

    NgoCartList?.map(async (items) => {
      const deleteres = await pool.query(
        "delete from ngocart where userid = $1 and productid = $2",
        [items.userid, items.productid]
      );
    });

    return res.json({"message":"all items removed"})

}

module.exports = {DeleteAllProducts}
