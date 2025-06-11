const {pool} = require('../db/database')


const DonateProduct = async(req,res)=>{

    const {NgoCartList,UserInfo,DisasterType} = req.body
    const {Id,Username,Useraddress} = UserInfo

    NgoCartList?.map(async(items)=>{
    const queryres = await pool.query("insert into ngodonation values($1,$2,$3,$4,$5,$6,$7,$8)",[Id,Username,items.productid,items.productname,items.quantity,items.donateqty,Useraddress,DisasterType])
    const deleteres = await pool.query("delete from ngocart where userid = $1 and productid = $2",[Id,items.productid])
    const addqtyres = await pool.query("update ngoproduct set quantity= quantity + $1 where productid = $2",[items.donateqty,items.productid])
    })

    return res.json({"message":"all products added to cart"})


}

module.exports = {DonateProduct}