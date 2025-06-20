const {pool} = require('../db/database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();


const UserLogin = async(req,res)=>{
    try {
        const { email, password } = req.body;
        const existingUser = await pool.query('SELECT * FROM userinfo WHERE email = $1', [email]);
        if(existingUser.rows.length === 0) {
            return res.json({ message: 'no user found' });
        }
        const user = existingUser.rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user.id ,Email:user.email,Username:user.username,Phoneno:user.phoneno,Usertype:user.usertype,Useraddress:user.address}, process.env.JWT_SECRET);
        return res.json({ message: 'Login successful', token ,"userinfo":{ "userId": user.id ,"userEmail":user.email,"Username":user.username,"Phoneno":user.phoneno,"Usertype":user.usertype,"Useraddress":user.address}});

    } catch (error) {
        console.error(error);
    }
}

module.exports = {UserLogin}
