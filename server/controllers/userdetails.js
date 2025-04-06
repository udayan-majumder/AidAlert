const jwt = require('jsonwebtoken')

const CheckLogin = async(req,res)=>{

try{
const token = req.cookies?.token
if(!token){
    return res.json({message:"UnAuthorized"})
}

const verifyToken = jwt.verify(token,process.env.JWT_SECRET)

if(verifyToken){
    return res.json({ message: "Authorized" });
}

return res.json({ message: "UnAuthorized" });

}
catch(err){
    console.log(err)
}

}

module.exports={CheckLogin}