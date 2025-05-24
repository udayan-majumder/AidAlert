const jwt = require('jsonwebtoken')

const CheckLogin = async(req,res)=>{

try{
const {token} = req.body
if(!token){
    return res.json({message:"UnAuthorized"})
}

const verifyToken = jwt.verify(token,process.env.JWT_SECRET)
console.log(verifyToken)
if(verifyToken){
    return res.json({ message: "Authorized" ,Userinfo :verifyToken});
}

return res.json({ message: "UnAuthorized" });

}
catch(err){
    console.log(err)
}

}

module.exports={CheckLogin}