const {pool} = require('../db/database')



const CartAdd = async(req,res)=>{
    const {Products,Userid} = req.body

     Products.map(async(data)=>{
        const queryres = await pool.query('insert into ngocart values($1,$2,$3)',[Userid,data?.productid,data?.qty])

     })

     return res.json({"message":"All items added successfully"})

}

module.exports =  {CartAdd}

