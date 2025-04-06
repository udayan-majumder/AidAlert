const pg = require('pg');
const { Pool } = pg;
const dotenv = require('dotenv');
dotenv.config();    

const pool = new Pool({
 connectionString: process.env.DATABASE_URL,
});

pool.connect(()=>{
    console.log("Connected to PostgreSQL database");
})

module.exports = {pool}