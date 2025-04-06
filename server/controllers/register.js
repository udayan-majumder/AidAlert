const {pool} = require('../db/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const UserRegister = async(req,res)=>{
    try {
        const { username, email, password } = req.body;
        const existingUser = await pool.query('SELECT * FROM userinfo WHERE email = $1', [email]);

        if(existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query('INSERT INTO userinfo(username, email, password) VALUES ($1, $2, $3) RETURNING *',[username, email, hashedPassword]);
        return res.json({message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
    }

}

module.exports = {UserRegister}